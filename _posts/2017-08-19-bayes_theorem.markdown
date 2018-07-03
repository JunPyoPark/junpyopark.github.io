---
layout: post
title: 가장 쉽게 이해하는 베이즈 정리(Bayes' Law)
date: 2017-08-19 13:32:20 +0300
description: null
img: bayes.jpg # Add image post (optional)
tags: [Bayes Theorem, Probability, Bayesian Statistics]
---

저번 게시글에서는 표본공간, 사건, 확률함수(확률측도), 확률변수와 분포, 기댓값 과 같은 기본적인 확률이론을 배웠습니다. <br>
이번 글 에서는 조건부 확률, 독립사건, 그리고 베이즈 정리에 대하여 공부해 보도록 하겠습니다.

## 조건부 확률(Conditional Probability)

  사건 B가 발생했을 때 사건 A가 발생할 확률은 사건 B의 영향을 받아 변하게 될 수도 있습니다. 조건부 확률은 어떤 사건 B가 일어났을 때(여기서 P[B] > 0 으로 가정합니다) 사건 A가 일어날 확률을 의미합니다. 수식으로는 다음과 같이 정의 됩니다.
 
 <center><img src="https://blogfiles.pstatic.net/MjAxNzA4MTlfNTEg/MDAxNTAzMDg2NDg0MzA1.o7fA008T-yniofiwvQIJArtUheXETxf_zHp_tMqVhLQg.ukep-ANX-zanrRAd1Y6JR0gr3x0c3DpKy_vLP29m_VQg.PNG.anthouse28/image.png?type=w1"></center>
 
 비슷한 원리로 만약 P(A) > 0 이라면 사건 A가 발생했을 때 사건 B가 발생할 확률은 다음과 같이 나타낼 수 있습니다.
 <center><img src="https://blogfiles.pstatic.net/MjAxNzA4MTlfMjEx/MDAxNTAzMDg2NjI3NzU2.Wthg-UJxbncXROGy6m6bnkm_xKOT3ODPwSaaYK5LB5gg.C3W6wPTIq1KmPL0RM2bO43GO1MdQdVSzOGTzRuRZ2w8g.PNG.anthouse28/image.png?type=w1"></center>

  위의 두 식에 간단한 곱셈을 적용하여 우리는 아래의 식을 유추해 낼 수 있습니다. 단순해 보이고 별 의미 없어 보일 수 있지만 앞으로 매우 중요하게 쓰일 식이기 때문에 잘 알아두시면 좋습니다. 
  
  <center><img src="https://blogfiles.pstatic.net/MjAxNzA4MTlfMjQw/MDAxNTAzMDg2NzYwNzc1.dLG90STLmpNw5EnEuKsbM5OcIXTC0nMA6tHdV3sgXbAg.v304_hNDSAyU9DHR6YDsccDi2tkee8vCAPV_IuarRJ4g.PNG.anthouse28/image.png?type=w1"></center>
  
  ## 독립사건(Independence)
  고등학교 수학시간에 두 사건이 서로 독립이라면 다음 식이 성립해야 한다고 배웠습니다.
  <center><img_src="https://latex.codecogs.com/gif.latex?%5Chuge%20P%28A%20%5Ccap%20B%29%20%3D%20P%28A%29P%28B%29"></center>
  
  이를 사건이 n개가 있는 경우로 확장시키면 다음과 같이 나타낼 수 있습니다.  <br>
어떠한 $1≤i_1< · · · <i_k≤n$ 에 대해서도 다음 식을 만족시킨다면 사건 $A_1,...,A_n$ 를 독립인 사건이라고 합니다.



<center><img src="https://blogfiles.pstatic.net/MjAxNzA4MTlfNDEg/MDAxNTAzMDg3MTI4NTIz.9C75S1SA8mSanM4KOxcXrV01F9oT58O9jeaznXW2q1Qg.a4Y-FSjpkSz6TftLAF4T3ph6JrW6zN0nHvRldj_D7Xcg.PNG.anthouse28/image.png?type=w1"></center>

정의가 어렵게 느껴질 수 있어서 보충설명을 드리겠습니다. i1,...,ik 라는 숫자는 1에서 n까지의 숫자중 임의의 k개(n개 이하)를 뽑은 인덱스 입니다. 즉 n개의 사건 중 아무거나 k개뽑아서 교집합 한 확률이 각각 확률의 곱과 같다면 독립이라고 할 수 있습니다. 

## 베이즈 정리(Bayes' Law)

  베이즈 정리를 정확히 배우기 전에 먼저 분할(Partition)이라는 개념을 공부해야 합니다.  <br>
  K개의 집합 B1,...,BK가 어떤 집합 S의 분할이 되려면 두 조건을 만족해야 합니다. <br><br>
  
 > 첫번째로 B1,...,BK 는 각각 서로소여야 합니다. 이는 무작위로 두개를 뽑았을 때 겹치는 부분이 없어야 한다는 뜻입니다. <br><br>
 > 두번째로 K개의 B1,...,BK 를 합집합 하였을때 그 집합은 정확히 S가 되어야 합니다. <br><br>
 이 두 조건을 만족해야 B1,...,BK 를 S의 분할이라고 할 수 있습니다. 


  아래 그림에 좋은 예시를 첨부하여 놓았습니다. 집합 A1,A2,A3,A4 는 각각 서로 겹치는 부분이 없고 합집합을 했을 때 A가 되므로 이들은 A의 분할이라고 할 수 있습니다.

<center><img src="https://blogfiles.pstatic.net/MjAxNzA4MTlfMTk2/MDAxNTAzMDg4MTg1ODQ5.z41-NzmMuszu5y_4O1P8vvg6QNw6oo5hfHTpRSk9WBMg.7vnaNCGPCcbgmhzShhoFHy3LjHWMkuZcz2GvQdKT-KMg.PNG.anthouse28/image.png?type=w1"></center>

  자 이제 K개의 집합 B1,...,BK가 어떤 사건 S의 분할이라고 합시다. 그러면 모든 S의 부분집합 A에 대해서 다음과 같은 식이 성립하게 됩니다. 
  
  <center><img src="https://blogfiles.pstatic.net/MjAxNzA4MTlfMjM0/MDAxNTAzMDg5OTcwNDA4.fDN2CF4z2a97LCPMBgGIvO8cHI5RFA7jjsLWPcAflV4g.87rcHprMRdhQ4F657v6XFVNYqnMFgU2WI1YKALAKTmMg.PNG.anthouse28/image.png?type=w1"></center>
  
  괄호안의 사건들이 각각 서로소이기 때문에 사건 A가 일어날 확률은 아래의 식과 같이 계산 할 수 있습니다.
  
  <center><img src="https://blogfiles.pstatic.net/MjAxNzA4MTlfNjIg/MDAxNTAzMDg5OTAzOTY3.s0K_drgpFh6u1C7QFAynyGSJQXJsJ5Xmd8KksaCz_rEg.C5AwePujIwnc0FEapeh5RknGX5ZIGZWXee54mroor5Eg.PNG.anthouse28/image.png?type=w1"></center>
  
  따라서 어떤 A라는 사건이 일어났을때 Bj 라는 사건이 일어날 조건부 확률은 다음과 같이 계산 할 수 있습니다.
  
  <center><img src="https://blogfiles.pstatic.net/MjAxNzA4MTlfMTI5/MDAxNTAzMDkwMTk4NDQw.Y-JUYME5S_1sVlZHuYg7C-iZcgoqD4ckOzXJzrt7QC4g.375jrdS590L7Nz6B16BknBdli8w11eoZkogDEgW-L7sg.PNG.anthouse28/image.png?type=w1"></center>
  
  위의 식을 일반적으로 베이즈 정리라고 합니다. 단순한 수식장난으로 보일 수 있지만 통계학에서는 매우 중요한 의미를 가지고 있는 식이며 베이지안 통계학(Bayesian Statistics)라는 응용 통계학의 분야도 따로 있습니다. 또 머신러닝등 다양한 다른분야에서도 활발하게 활용되고 있습니다. <br>
  
  위 식에서 핵심은 사건 A가 일어났을 때의 확률( P[Bj|A] )을 계산함에 있어서 이를 거꾸로 뒤집어 B가 일어났을때의 확률들( P[A|Bi]들 )로 표현 할 수 있다는 것 입니다. 즉 A가 조건으로 주어졌을 때 B의 확률에 대해서 궁금했던 것을 반대로 B가 조건으로 주어졌을 때 A의 확률에 대해서 이야기 하는 것으로 바꾸어 쓸 수 있다는 것 입니다. 예제를 통해 적용되는 방식을 살펴보도록 하겠습니다. <br>
  
   어떤 주식이 그날 상승할 확률을 Θ라고 합시다. 우리는 일별 주가 데이터 분석을 통해 Θ값이 0.4일 확률이 50%이고 0.6일 확률이 50%임을 발견하였습니다. 이를 식으로 표현하면 다음과 같습니다.
   
   <center><img src="https://blogfiles.pstatic.net/MjAxNzA4MTlfNzMg/MDAxNTAzMDkxMDE0NzY1.Aob8QwvPLdzAP3za6kT8gbZNNM8YGJxBWELKLRYhN58g.6TVoK5yqvs7YX1dxau4RJN1-YjTuo3imHHnsVTqI19kg.PNG.anthouse28/image.png?type=w1"></center>
   
   자 이제 또다른 데이터 관측을 통해 Θ값이 결정된 이후 주가가 3일연속 상승할 확률이 Θ3 으로 주어짐을 알아냈습니다(여기서 서로 다른 날의 주가의 상승과 하락은 독립적이라고 가정하겠습니다). 그렇다면 주가가 3일연속 상승하였을 때, Θ값이 0.6인 확률은 얼마나 될까요? <br>
   <br>
    
   문제를 쉽게 풀기 위해 주가가 3일연속 오른 사건을 A라고 하도록 하겠습니다. 그러면 우리가 구해야 되는 확률은 P(Θ=0.6|A) 가 되고 이를 베이즈 정리를 통해 나타내면 그 값을 다음과 같이 계산 할 수 있습니다.

<center><img src="https://blogfiles.pstatic.net/MjAxNzA4MTlfOTIg/MDAxNTAzMDkxNjAwMjI4.DU04Cwf4eT3phGZHibscE5Q5WS4WLp9xiD9BRO7Bkhsg.CZfJpDsHVli4b0cC87mXBUNpS3Sttyd6XWBCZnisyXQg.PNG.anthouse28/image.png?type=w1"></center>

  현재 가지고 있는 정보를 기초로하여 정한 초기확률 또는 확률 시행 전에 이미 가지고 있는 지식을 통해 부여한 확률을 사전확률(prior probability)이라고 합니다. 위의 문제에서는  Θ값이 0.4일 확률이 50%이고 0.6일 확률이 50% 라는 사실이 사전확률에 해당됩니다. <br><br>

  사건 발생 후에 어떤 원인으로부터 일어난 것이라고 생각되어지는 확률 또는 추가된 정보로부터 사전정보를 새롭게 수정한 확률을 사후확률(posterior probability)라고 합니다. 사후확률은 위의 문제에서와 같이 조건부 확률을 통해 표현 할 수 있습니다. 베이즈 정리를 통해 구한 0.7714 라는 수치가 이 문제에서 사후확률에 해당합니다. <br><br>

  이처럼 베이즈 정리는 새로운 정보에 대해 어떻게 대응하여 결과를 도출 해낼지를 알려주는 강력한 도구가 되기 때문에 매우 중요합니다. 일반적으로 우리는 새로운 정보를 너무 무시하거나 과대평가하는 경향성을 가지고 있습니다. 그렇기 때문에 추가적인 정보를 받아들이고 올바른 방향으로 믿음을 수정하는 일은 생각보다 우리에게 매우 힘든 일입니다. 베이즈 정리는 이런 방향성에 대한 수학적인 가이드라인을 제공해 준다는 측면에서 그 중요성을 발견 할 수 있습니다. <br><br>
  
 