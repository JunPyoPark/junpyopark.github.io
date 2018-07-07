---
layout: post
title: 기초확률이론(Basic Probability Theory)
date: 2017-07-15 13:32:20 +0300
description: null
img: prob.jpg # Add image post (optional)
tags: [Probability, Probability Theory]
---

## **표본공간(Sample Space) 과 사건(Event)**

어떤 시행에서 일어날 수 있는 모든 결과들의 모임을 표본 공간이라고 합니다. 예를 들어 주사위를 한번 던지는 시행의 경우 표본공간은 {1,2,3,4,5,6}와 같은 집합(set)이 됩니다. 그렇다면 이전 시간에 배운 동전던지는 시행을 예로 들어보겠습니다. 앞면과 뒷면이 나올 확률이 0.5로 동일한 동전을 3번 던지는 시행을 한다면 표본공간은 다음과 같이 나타낼 수 있습니다.
<center><img src="https://latex.codecogs.com/gif.latex?%5CLARGE%20%5COmega%20%3D%20%5Cbegin%7BBmatrix%7D%20HHH%2C%20HHT%2CHTH%2CHTT%2CTHH%2CTHT%2CTTH%2CTTT%20%5Cend%7BBmatrix%7D"></center>
<center>표본공간은 주로 Ω라는 문자로 표현합니다.</center>
<center><img src="https://latex.codecogs.com/gif.latex?%5CLARGE%20%5COmega%20%3D%20%5Cbegin%7BBmatrix%7D%20w_1w_2w_3%20%3A%20w_i%5Cin%20%5Cbegin%7BBmatrix%7D%20H%2CT%20%5Cend%7BBmatrix%7D%20for%20%5C%2C%5C%2C1%20%5Cleq%20i%5Cleq%203%20%5Cend%7BBmatrix%7D"></center>
<center>위의 표본공간을 이렇게도 표현 할 수 있습니다. 학창시절 이런 표현방식을 조건제시법이라고 배웠습니다.</center>
