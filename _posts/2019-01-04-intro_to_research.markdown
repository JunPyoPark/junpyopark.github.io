---
layout: post
title: Introduction to Research(Jupyter Env)
date: 2019-01-04 02:05:13 +0300
description: null
img: research.jpg
tags: [Jupyter Notebook]
---

# Introduction to Research
by JunPyo Park

Part of the Alpha Square Lecture Series:

* [blog.alphasquare.co.kr](http://blog.alphasquare.co.kr)
* [junpyopark.github.io](https://junpyopark.github.io)


---

# 주피터 노트북 환경 살펴보기

데이터 분석은 주피터 노트북 환경(IPython notebook environment)를 활용합니다. 몇가지 간단한 기능들을 소개하려 합니다.

## 코드 셀 vs 텍스트 셀

각각의 셀들은 코드를 담거나 텍스트를 담을 수 있습니다. 셀을 클릭 후 m 을 누르면 텍스트 셀(Markdown)로 활용할 수 있고 y 를 누르면 코드 셀로 활용할 수 있습니다.

## 명령어 실행하기

코드 셀은 실행 버튼을 누르거나 셀에서 쉬프트 엔터를 누르면 실행됩니다. 코드 셀에 명령어를 입력한 뒤 실행하면 각 줄의 내용이 실행되어 지고 결괏값이 셀의 마지막줄 아래에 출력됩니다.

<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e425194fcd3698bd16bb8/449692597a32508938bffa5c4a996721/image.png">

출력값이 없는 셀도 있을 수 있습니다. 다음과 같이 변수에 값을 할당하는 경우 입니다.

<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e425194fcd3698bd16bb8/18386855aeec8483a6fba8a603b206eb/image.png">

## 셀이 동작하고 있을 경우

셀이 동작하고 있을 경우 ```[*]``` 기호가 왼쪽에 표시됩니다. 실행 되지 않은 셀의 경우 ```[]``` 기호가 표시됩니다. 실행된 셀은 ```[5]``` 와 같이 몇 번째 순서로 실행되었는지 그 숫자가 표기됩니다. 다음 셀을 실행 시키고 어떤 일이 벌어지는지 잘 관찰해 보세요.

```python
# 시간이 걸리는 코드를 작성해 보았습니다.
c = 0
for i in range(10000000):
    c = c + i
c
```

<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e425194fcd3698bd16bb8/72e3f7198b30029b45a99aab0c0c0b4b/image.png">

## 라이브러리 불러오기

대부분 작업의 경우 미리 만들어진 라이브러리에서 함수를 불러와 사용하게 됩니다. 아나콘다 환경에서는 기본적인 라이브러리들이 설치되어 있으며 설치되지 않은 라이브러리는 pip 명령어 등으로 설치하여 불러올 수 있습니다. 설치된 라이브러리는 ```import``` 명령어를 통해 불러올 수 있습니다.

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
```

<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e425194fcd3698bd16bb8/ea4f0e00c7790a04578366e19744f3b9/image.png">

라이브러리를 불러온 후 ```as``` 라는 명령어를 통해 이름을 재설정 할 수 있습니다. numpy 라이브러리에는 ```np``` 라는 이름을 pandas 라이브러리에는 ```pd``` 라는 이름을 지정하였습니다. 이는 대부분의 코드에서 보편적으로 사용하는 이름입니다. 이처럼 라이브러리를 자주 호출하는 경우 단순한 이름으로 재설정하여 쉽게 접근할 수 있습니다.

## Tab 자동완성 기능

탭키를 누르면 주피터 노트북에서 다음에 쓸 명령어나 변수이름를 자동으로 추천하여 보여주거나 해당하는 값이 하나라면 자동으로 완성시켜 줍니다. 이는 코드를 작성할 때 많은 시간을 절약할 수 있도록 해줍니다. 이 기능을 활용하여 라이브러리에 어떤 함수들이 있는지 확인하는것도 가능합니다.

다음 셀에서 커서를 ```.``` 뒤에 두고 탭을 눌러보세요.

```python
np.random.
```

<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e425194fcd3698bd16bb8/8d5451e5b78c97521c9a73a034fab515/image.png">

## Documentation 도움말 보기

물음표를 함수 뒤에 입력하고 해당 셀을 실행하면 주피터가 해당 함수에 대한 documentation을 보여줍니다. 코드가 재실행 되는것을 방지하기 위해 새로운 셀에서 이런 도움말 기능을 실행하면 편리합니다.

```python
np.random.normal?
```

실행 결과 다음과 같은 도움말 화면을 볼 수 있습니다.

<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e425194fcd3698bd16bb8/a9fc4c0a39d673dd755139fbae0ac5d0/image.png">

## Sampling 하기

```numpy```의 여러 함수들을 통해 랜덤한 데이터를 샘플링 할 수 있습니다.

```python
# 평균이 0 이고 분산이 1 인 정규분포에서
# 100개의 데이터를 다음과 같이 추출할 수 있습니다.
X = np.random.normal(0, 1, 100)
```

## Plotting 하기

이전에 불러온 plt 라이브러리를 통해 그래프를 그릴 수 있습니다.

```python
plt.plot(X)
```
<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e425194fcd3698bd16bb8/86cfba356e240fdd675b71ef7efbf62e/image.png">

### Line Output 제거하기

위 출력결과를 보면 ```[<matplotlib.lines.Line2D at 0x160c22db240>]``` 와 같이 문구가 그래프와 같이 출력된것을 볼 수 있습니다. 이를 없애기 위해 다음과 같이 마지막에 세미콜론을 붙여줍니다.

```python
plt.plot(X);
```

<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e425194fcd3698bd16bb8/e6b2a667f11b17210894fa887635bc43/image.png">

### 축에 이름 설정하기

```plt.xlabel``` 또는 ```plt.ylabel``` 명령어를 통해 각각 x축, y축의 이름을 지정할 수 있습니다.

```python
X = np.random.normal(0, 1, 100)
X2 = np.random.normal(0, 1, 100)

plt.plot(X);
plt.plot(X2);
plt.xlabel('Time') 
plt.ylabel('Returns')
plt.legend(['X', 'X2']);
```

<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e425194fcd3698bd16bb8/e271683c31ab769231e332238eed8b99/image.png">

## 통계량(statistics) 계산하기

```numpy```를 활용해서 간단한 통계량들을 쉽게 계산할 수 있습니다.

```python
# 평균
np.mean(X)
```
<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e425194fcd3698bd16bb8/159933b557ab1d360f06639471656bb5/image.png">

```python
# 표준편차
np.std(X)
```

<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e425194fcd3698bd16bb8/682eaa2f88a186576221f11c4550ec26/image.png">

## 주가 데이터 불러오기

제가 썼던 [글](http://blog.naver.com/anthouse28/221408163989)을 참고해 주세요!

```python
import pandas_datareader.data as web

data = web.DataReader('AAPL', 'robinhood')
data
```

<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e425194fcd3698bd16bb8/6da735005491a9f0beb268e43ce6d97a/image.png">

```data``` 변수는 pandas.DataFrame 형태를 가지고 있습니다. 
[자세한 설명 보기](http://pandas.pydata.org/pandas-docs/stable/10min.html).

```python
X = data.loc['AAPL']['close_price'].astype('float')
```

```python
plt.plot(X.index, X.values)
plt.ylabel('close')
plt.legend(['AAPL']);
```
<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e425194fcd3698bd16bb8/735db3a3f804e20586a248b0576d9923/image.png">

실제 데이터에서 통계량을 계산할 수 있습니다.

```python
print(np.mean(X))
print(np.std(X))
```

<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e425194fcd3698bd16bb8/0b329a15f21178c8b1e972725b2b5122/image.png">

## 가격으로 부터 수익률 계산하기

```pct_change```(percent change) 라는 함수를 사용하여 일간 수익률을 쉽게 계산할 수 있습니다.

```python
R = X.pct_change()
R.head()
```

<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e425194fcd3698bd16bb8/b4a45deed52941fa3aa465e92cd53adf/image.png">

R 값을 확인해 보면 처음 데이터의 경우 기준이 되는 이전일의 데이터가 없기 때문에 NaN(Not a Number)라는 값이 저장되어 있습니다. 다음과 같은 조작을 통해 이 값을 없앨 수 있습니다.

```python
R = X.pct_change()[1:]
R.head()
```

<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e425194fcd3698bd16bb8/5d5829d26518a7ca040610ed69516ab8/image.png">

```plt.hist``` 함수를 사용하여 일간 수익률 히스토그램을 그려보도록 하겠습니다.

```python
# 구간의 범위를 몇 등분 할것인지 bins 개수를 통해 조절 가능합니다.
plt.hist(R, bins=20)
plt.xlabel('Return')
plt.ylabel('Frequency')
plt.legend(['AAPL Returns']);
```

<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e425194fcd3698bd16bb8/fcaaca472aec45666a93506a0649b25d/image.png">

통계량을 계산해 봅시다.

```python
np.mean(R)
np.std(R)
```

<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e425194fcd3698bd16bb8/d79a6ae9d86289a30e2e4fb46774b3d7/image.png">

위의 수익률 데이터로 부터 측정된 평균과 표준편차 값을 바탕으로 정규분포를 그려 보도록 하겠습니다. 그려진 정규분포와 실제 데이터의 수익률 분포 비교를 통해 실제 수익률이 정규분포를 따르는지 추정해 볼 수 있습니다.

```python
plt.hist(np.random.normal(np.mean(R), np.std(R), 10000), bins=20)
plt.xlabel('Return')
plt.ylabel('Frequency')
plt.legend(['Normally Distributed Returns']);
```

<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e425194fcd3698bd16bb8/832723c0a69471dfca9a0e562118170a/image.png">

유사한 형태를 보이지만 완전히 같다고는 보기 힘들다 생각됩니다. 일단 오늘은 이렇게 간단히 히스토그램을 그려 모양을 통해 추정해 보는것으로 글을 마치도록 하겠습니다. 실제데이터가 조금더 엄밀하게 정규분포를 따르는지 확인하려면 자크베라의 정규성 검정(Jacque-Bera Normality test)과 같은 방식을 활용해야 합니다. 이는 추후 가설 검정 부분 이후 소개하도록 하겠습니다.

