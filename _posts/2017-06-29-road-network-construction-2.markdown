---
layout: post
title: 파이썬으로 도로 네트워크 구성 및 시각화 하기 - 2. 도로 네트워크 구성 및 시각화 하기
date: 2018-06-28 13:32:20 +0300
description: null
img: network.jpg # Add image post (optional)
tags: [Network, Python Network Analysis, Folium, Road Network]
---

저번에 작성하였던 1편에 이어 2편에서 네트워크 구성과 시각화에 대한 내용을 정리해 보려 합니다. \[[1편 링크][jp]\] 

[jp]: https://junpyopark.github.io/road-network-construction-1
## Networkx 패키지
<img src="https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5b34a3a14be075bc986bba26/0a8f20c7d9f55d606ecd8b5e21c3acda/image.png">

[Networkx 패키지][networkx]는 Python 에서 쉽게 네트워크 관련 기능을 사용 할 수 있도록 구현해 놓은 모듈 입니다. 아나콘다 패키지로 파이썬을 설치하셨다면 따로 설치할 필요 없이 바로 사용 하실 수 있습니다.

[networkx]: https://networkx.github.io  

## Folium 라이브러리
<img src="https://trello-attachments.s3.amazonaws.com/59103d52b56a24582f00dc97/5ac9878e1e1550dea50a1f5b/adbdfd2fff8aa3075bfa1bbb72335221/image.png"></img>

[Folium][folium] 은 ‘Open Street Map’과 같은 지도데이터에 ‘Leaflet.js’를 이용하여 위치정보를 시각화하기 위한 라이브러리 입니다.
 기본적으로 ‘GeoJSON’ 형식 또는 ‘topoJSON’ 형식으로 데이터를 지정하면, 오버레이를 통해 마커의 형태로 위치 정보를 지도상에 표현할 수 있습니다. <br>
여기서는 GeoJSON 이나 topoJSON 등의 데이터 형식은 따로 사용하지 않고 모듈에서 제공하는 기본적인 marker 기능만 사용하여 도로망 시각화를 하도록 하겠습니다.

[folium]: http://folium.readthedocs.io/en/latest/ 

## 네트워크 구축하기
필요한 패키지들을 import 합니다. 설치가 안된건 pip 명령어로 설치하여 줍니다.
```python
import os
import folium
import pandas as pd
import numpy as np
import networkx as nx
```
pandas.read_csv 명령어를 통해 저번에 만들어 놓은 2015년 인천 csv 파일을 불러 오겠습니다.
```python
nodes = pd.read_csv('incheon_nodes_150105.csv')
links = pd.read_csv('incheon_links_150105.csv')
```

nodes에서 필요한 column만 추출 합니다.  
```python
nodes = nodes[['Id','NODE_NAME','latitude','longitude']]
```
읽어온 link 데이터 중에서 source 와 target column 만 추출합니다. 출력해 보면 다음과 같습니다.
```python
links = links[['Source','Target']]
links.head()
```
<img src="https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5b34a3a14be075bc986bba26/69f05c32750f139a3857a63701525c55/image.png">

이 데이터로 네트워크를 구성하기 전에 한가지 확인해야 할 것이 있습니다. 우리는 노드 데이터를 인천 지역에 있는 것으로만 한정 하였습니다. 하지만 링크 데이터에는 인천 지역이 아닌 외부의 노드와 연결된 데이터가 존재합니다. 이런 상황에서 바로 네트워크를 구축하면 에러가 발생하게 됩니다. 따라서 이렇게 외부지역과 연결된 링크들을 미리 제거해 주어야 합니다. 다음과 같이 간단한 코드로 이를 처리 할 수 있습니다.

```python
source_in = links['Source'].apply(lambda x : x in list(nodes['Id'])) # check Sources are in incheon_id
target_in = links['Target'].apply(lambda x : x in list(nodes['Id'])) # check Targets are in incheon_id
# source_in and target_in are boolean type pandas.Series which contains True or False
incheon_links = links[source_in & target_in] # contain if both target and source are contained in incheon_id
``` 
apply(lambda x) 기능을 사용하여 True/False 로 이루어진 시리즈를 만든 뒤 기존의 link 중에 source 와 target 둘 다 True 인 곳(둘 다 인천 안에 있는)만 따로 incheon_link 에 저장해 줍니다.<br>
변경된 incheon_links 의 데이터 갯수를 출력해 보도록 하겠습니다.

<img src="https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5b34a3a14be075bc986bba26/8a96633ef5a39a3b3fd53911b17d5402/image.png">
처음에 6464개의 링크에서 6421개로 수가 줄어들었음을 확인 할 수 있습니다. 인천이 아닌 외부 지역과 연결된 도로가 제외된 것 입니다. <br>
이제 networkx 모듈을 사용하여 네트워크를 구성해 보도록 하겠습니다. <br>
G = nx.Graph() 명령어를 통해 빈 그래프(네트워크)를 생성할 수 있습니다. <br>
G.add_node, G.add_link 를 통해 노드와 링크를 그래프에 추가 할 수 있습니다(자세한 설명은 documentation에 잘 나와있습니다). <br><br>
Link 를 그냥 추가하면 재미가 없기 때문에 가중치를 부여해서 넣어 보려합니다. 도로 네트워크기 때문에 source 와 target 사이의 거리를 계산해서 넣어 보도록 하겠습니다. 우리는 source 와 target의 위도, 경도 정보를 알고 있기 때문에 아래 사진의 공식을 사용하여 두 지점 사이의 거리를 계산 할 수 있습니다(물론 지구가 완벽한 구가 아니기 때문에 오차가 조금 있을 것 입니다). <br><br>
<center><img src="https://trello-attachments.s3.amazonaws.com/59103d52b56a24582f00dc97/5ad6becddd7e2be0e8dbd88a/b83b4330a4e13fcfd5af94e8fbf954a5/image.png"></center><br><br>
<img src="https://trello-attachments.s3.amazonaws.com/59103d52b56a24582f00dc97/5ad6becddd7e2be0e8dbd88a/f096c344ea7edf005c3dbf681be5003e/image.png"><br>
이를 구현해서 다음과 같이 네트워크를 구성 할 수 있습니다.<br>

```python
G = nx.Graph()
# R is the Earth's radius
R = 6371e3

for idx,row in nodes.iterrows():
    # add node to Graph G
    G.add_node(row['Id'],Label=row['NODE_NAME'],latitude=row['latitude'], longitude=row['longitude'])

for idx,row in incheon_links.iterrows():
    ## Calculate the distance between Source and Target Nodes
    lon1 = float(nodes[nodes['Id'] == row['Source']]['longitude'] * np.pi/180)
    lat1 = float(nodes[nodes['Id'] == row['Source']]['latitude'] * np.pi/180)
    lon2 = float(nodes[nodes['Id'] == row['Target']]['longitude'] * np.pi/180)
    lat2 = float(nodes[nodes['Id'] == row['Target']]['latitude'] * np.pi/180)
    d_lat = lat2 - lat1
    d_lon = lon2 - lon1
    a = np.sin(d_lat/2) ** 2 + np.cos(lat1) * np.cos(lat2) * np.sin(d_lon/2) ** 2
    c = 2 * np.arctan2(a**0.5, (1-a) ** 0.5)
    d = R * c
    
    # Link attribute : 'Source', 'Target' and weight = 'Length between them'
    G.add_edge(row['Source'],row['Target'],weight = d)
```

nx.info(G) 명령어를 통해 다음과 같이 간단한 네트워크 정보를 확인 할 수 있습니다.
<img src="https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5b34a3a14be075bc986bba26/6bfbe2d5a13bfdcf9a2bd1dbbcf99ab5/image.png">

nx.write_gexf(G,'Incheon_2015.gexf') 명령어를 통해 *.gexf 파일로 그래프를 내보낼 수 도 있습니다. Gephi 라는 네트워크 시각화 소프트웨어를 이용해서 다음과 같이 시각화 할 수 있습니다.<br> 
<img src="https://trello-attachments.s3.amazonaws.com/59103d52b56a24582f00dc97/5ad394e5aded2485139e183c/77d81ebf997a213519cad0a94885fbd9/image.png"></img>
Gephi 소프트웨어를 사용하면 여러가지 네트워크 measurement나 특성 계산을 쉽게 해줘서 편리합니다. 아래 정보는 Gephi가 제공해 주는 계산기능을 이용해 작성한 인천 2015년 네트워크와 2018년 네트워크의 특성 비교 테이블 입니다.
<img src="https://trello-attachments.s3.amazonaws.com/59103d52b56a24582f00dc97/5ad7045f9faca28f3223121c/b9e139fe8db5e9384303ae69b00db575/image.png">

## Folium 라이브러리를 통한 시각화 지도 만들기
이제 Folium 모듈을 통해 interactive 한 지도를 생성해 보도록 하겠습니다. 먼저 지도 상에서 기준점이 될 포인트를 잡아 줍니다. 저는 노드 데이터 상에서 첫번째에 나온 녀석을 기준점으로 잡았습니다. 

```python
# Positioning the Standard Point for our Folium Map
std_point = tuple(nodes.head(1)[['latitude','longitude']].iloc[0])
std_point
```
다음과 같이 위도와 경도 tuple 형태로 출력이 되어야 합니다.
<img src="https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5b34a3a14be075bc986bba26/7e8a6081930e1eafbf7ae47e0c956fe2/image.png">

이제 노드 들을 지도상에 표시하여 보도록 하겠습니다. 다음과 같이 코드를 만들어 줍니다.
```python
map_osm = folium.Map(location=std_point, zoom_start=10) 
# location : 기준이 되는 점, zoom_start : 지도 상의 zoom level 을 나타냅니다.

for ix, row in nodes.iterrows():
    location = (row['latitude'], row['longitude']) # 위도, 경도 튜플
    folium.Circle(
        location=location,
        radius=G.degree[row['Id']] * 30, # 지름이 degree에 비례하도록 설정
        color='white',
        weight=1,
        fill_opacity=0.6,
        opacity=1,
        fill_color='red',
        fill=True,  # gets overridden by fill_color
        # popup=str(row['Id'])
    ).add_to(map_osm)
    # folium.Marker(location, popup=row['NODE_NAME']).add_to(map_osm)
map_osm
```
표시한 원의 지름(radius)을 노드의 degree(그 점에 연결된 link의 수)와 비례하게 설정 하였기 때문에 아래 사진처럼 도로가 많이 연결된 곳은 원의 크기가 크게 나오게 됩니다.

<img src="https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5b34a3a14be075bc986bba26/c34c5b1c3a4523ec0133748a3034fa71/image.png" class="center">

이제 링크 데이터를 표시해 보도록 하겠습니다. 저는 파란색 선을 통해 연결을 하였습니다.
```python
kw = {'opacity': 0.5, 'weight': 2}
for ix, row in incheon_links.iterrows():
    start = tuple(nodes[nodes['Id']==row['Source']][['latitude','longitude']].iloc[0])
    end = tuple(nodes[nodes['Id']==row['Target']][['latitude','longitude']].iloc[0])
    folium.PolyLine(
        locations=[start, end],
        color='blue',
        line_cap='round',
        **kw,
    ).add_to(map_osm)
# it takes some time.....
map_osm
```
이 작업은 시간이 조금 오래 걸립니다. 또 코드가 다 돌아 갔는데 흰색 화면만 나오고 실행이 안되는 경우도 있는데 그럴 때는 주피터 노트북을 실행 하실 때 다음과 같은 명령어로 실행하시면 아마(?) 될 겁니다(저는 이렇게 해서 문제를 해결 했는데 다른 환경에서는 확답을 드리지는 못할 거 같습니다).
```python
jupyter notebook --NotebookApp.iopub_data_rate_limit=10000000
```
출력이 완료 되었다면 완성입니다! 제가 살고있는 송도 신도시를 2015년과 2018년 데이터로 출력하여 비교해 보았습니다.
<img src="https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5b34a3a14be075bc986bba26/dc9e5da4071e8a258b7054a46ad7b10e/image.png">
3년 동안 도로가 많이 생겼음을 확인 할 수 있습니다. 송도 유령도시라는 친구들에게 보여주고 싶군요.... <br> 
어쨋든 오늘 글은 이 쯤에서 마무리 하도록 하고 앞으로도 공부하면서 여러가지 흥미롭거나 유용한 자료 올리도록 하겠습니다. 읽어주셔서 감사합니다! 