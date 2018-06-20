---
layout: post
title: 파이썬으로 도로 네트워크 구성 및 시각화 하기 - 1. 데이터 다운로드 및 프로세싱
date: 2017-09-12 13:32:20 +0300
description: null
img: network.jpg # Add image post (optional)
tags: [Network, Python Network Analysis, Folium]
---

아래 사진은 인천 영종도의 도로 네트워크를 보여주는 사진 입니다. 왼쪽은 2018년, 오른쪽은 2015년의 모습 입니다.
<img src="https://trello-attachments.s3.amazonaws.com/59103d52b56a24582f00dc97/5acb73d98b96c3a12c16ebd9/5543ffbd0bffff90df3955a599078620/image.png">
파이썬으로 도로 네트워크를 구성하고 interactive 한 지도 모듈인 folium 을 사용하여 시각화 하는 법을 알아 보도록 하겠습니다. 네트워크를 구성 할 때는 networkx 모듈을 사용하게 됩니다.  

## 노드/링크 데이터 다운로드 하기
먼저 네트워크의 노드와 링크에 해당하는 자료를 다운로드 받아야 합니다. 구글 검색창에 '표준노드링크' 라고 검색을 하시면 자료실에서 원하는 시점의 전국표준노드링크 데이터를 다운 받을 수 있습니다.
<img src="https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5b29ec90d281252a5f996b7d/49a9364c7c342cb8ece358975553bfd8/image.png">

다운을 받은 뒤 압축을 푸시면 다음과 같은 파일들이 보이게 됩니다.
<img src="https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5b29ec90d281252a5f996b7d/aae479e60441eda9841ca6cdc4d14936/image.png">

## CSV 형식으로 변환 및 위도, 경도 데이터 추출
위의 *.shp 파일을 파이썬으로 읽어와서 작업을 해보도록 하겠습니다.
먼저 아래의 항목들을 설치하여 줍니다.
```python
pip install pyshp
pip install pyproj 
```
설치가 완료되었다면 필요한 모듈들을 import 합니다.
```python
import shapefile  #the pyshp module : Should install pyshp module.
import pandas as pd
from pyproj import Proj, transform  #Should install pyproj module.
```
```python
# read data (Copy all files from nodelink into nodelink folder: I made it.)
# using old_data
shp_path_node = './...경로.../MOCT_NODE.shp'
sf_node = shapefile.Reader(shp_path_node)
shp_path_link = './...경로.../MOCT_LINK.shp'
sf_link = shapefile.Reader(shp_path_link)

# construct pandas dataframe
#grab the shapefile's field names
# node
fields_node = [x[0] for x in sf_node.fields][1:]
records_node = sf_node.records()
shps = [s.points for s in sf_node.shapes()] # node has coordinate data.
# link
fields_link = [x[0] for x in sf_link.fields][1:]
records_link = sf_link.records()

#write the records into a dataframe
#node
node_dataframe = pd.DataFrame(columns=fields_node, data=records_node)
#add the coordinate data to a column called "coords"
node_dataframe = node_dataframe.assign(coords=shps)
# link
link_dataframe = pd.DataFrame(columns=fields_link, data=records_link)
```
여기까지 작업 후 node_dataframe 을 띄워보면 다음과 같이 나오게 됩니다.
<img src="https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5b29ec90d281252a5f996b7d/76f717e0b02537e9a63d5c4277eef1a5/image.png">
칼럼들을 살펴보면 NODE_NAME, ROAD_NAME 은 string 타입이 아니며 coords(좌표계) 또한 위도와 경도가 아닌 이상한 좌표계로 표현되어 있습니다.
추후에 이를 수정 하기로 하고 STNL_REG 항목을 살펴 봅시다. 이 항목은 권역번호를 나타내며 [다음의 페이지][stnl]에서 지역별 번호를 확인 할 수 있습니다.

[stnl]: http://nodelink.its.go.kr/intro/intro06_05.aspx 

>####광역/특별시의 권역코드(STNL_REG)는 다음과 같습니다. <br>
>- 서울 : 100 ~ 124
>- 부산 : 130 ~ 145
>- 대구 : 150 ~ 157
>- 인천 : 161 ~ 170
>- 광주 : 175 ~ 179
>- 대전 : 183 ~ 187
>- 울산 : 192 ~ 196

여기서는 인천(161~170)을 골라서 데이터를 추출 하도록 하겠습니다. 인천의 권역번호는 161~170 입니다. 인천의 데이터에 해당 되는 자료만 가져오는 코드는 다음과 같이 만들 수 있습니다.
```python
# Data restriction
range_STNL_REG=range(161,170) # STNL_REG for Incheon
df_node = pd.DataFrame()
df_link = pd.DataFrame()
for ii in range_STNL_REG:
    res_node = node_dataframe[node_dataframe['STNL_REG'] == str(ii) ] # STNL_REG is not int.
    res_link = link_dataframe[link_dataframe['STNL_REG'] == str(ii) ]
    df_node = pd.concat([df_node,res_node],ignore_index=True) # marge data
    df_link = pd.concat([df_link,res_link],ignore_index=True)
```
이상한 형식으로 되어있는 노드 이름을 한글로 표현 되도록 decode 해줍니다. cp949나 euc_kr 등 여러가지로 시도해보시면 됩니다.

```python
# Change node name in korean 
for idx,row in df_node.iterrows():
    if type(row['NODE_NAME']) == bytes :
        # row['NODE_NAME'] = row['NODE_NAME'].decode('euc_kr')
        row['NODE_NAME'] = row['NODE_NAME'].decode('cp949')
```

이제 데이터의 좌표계를 사용하기 편한 위도/경도 좌표계로 변경 하도록 하겠습니다. 표준 노드/링크 데이터에서는 korea 2000 좌표계라는 system을 사용하고 있습니다. 우리는 이 좌표계를 위도와 경도 좌표계인 wgs84 좌표계로 변환 해야 합니다. 여기서 처음에 설치한 Proj package 를 사용합니다.
코드는 다음과 같습니다.
```python
# Change coordinate system
# korea 2000/central belt 2010 (epsg:5186) to wgs84(epsg:4326)
inProj = Proj(init = 'epsg:5186')
outProj= Proj(init = 'epsg:4326')
latitude = []
longitude= []
for idx,row in df_node.iterrows():
    x,y  = row.coords[0][0],row.coords[0][1]  # korea 2000 좌표계
    nx,ny = transform(inProj,outProj,x,y)     # 새로운 좌표계    
    latitude.append(ny)
    longitude.append(nx)
df_node['latitude'] = latitude
df_node['longitude']= longitude
del df_node['coords'] # delete coords
``` 
좌표계 변환 작업이 완료되었습니다. 나중에 네트워크를 구성하고 Gephi 같은 visualization tool 을 사용하기 편하게 column 이름을 수정 해줍니다.
```python
# Change column name to draw network in Gephi
df_node.rename(columns={'NODE_ID':'Id'},inplace = True)
df_link.rename(columns={'F_NODE':'Source','T_NODE':'Target'},inplace = True)
``` 
최종 결과물인 df_node 와 df_link 를 출력해 보면 다음과 같이 데이터가 들어가 있음을 확인 할 수 있습니다.
<img src="https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5b29ec90d281252a5f996b7d/142a0064a25b102d72db420b3a300ca4/image.png">

판다스의 DataFrame.to_csv 명령어를 통해 다음과 같이 csv 파일의 형태로 데이터 프레임을 저장 할 수 있습니다.

```python
df_node.to_csv('Incheon_nodes_150105.csv') # node list
df_link.to_csv('Incheon_links_150105.csv') # edge(=link) list
```

다음 게시글 2편에서 위의 csv 파일을 바탕으로 네트워크를 구성하고 folium 모듈을 통해 시각화 하는 법을 알아 보도록 하겠습니다.