---
layout: post
title: Introduction to Python(Python Basics)
date: 2019-01-04 02:46:13 +0300
description: null
img: python.jpg
tags: [Jupyter Notebook]
---

# Introduction to Python
by JunPyo Park

Part of the Alpha Square Lecture Series:

* [blog.alphasquare.co.kr](http://blog.alphasquare.co.kr)
* [junpyopark.github.io](https://junpyopark.github.io)


---
파이썬 기초와 자료구조, 문자열, 조건문, 반복문 그리고 함수에 대해서 간단하게 정리해 보았습니다. 주피터 노트북 환경에서 작성한 문서이기 때문에 주피터 노트북을 켜고 따라서 실습해 보시면 쉽게 이해하실수 있습니다.

## 주석 코드(code comments)

주석 코드는 프로그래머가 프로그램의 소스코드 상에 남기는 메모 입니다. 주석의 목적은 소스 코드를 명확히 하는것과 더불어 다른사람들이 코드를 쉽게 따라갈 수 있도록 안내해주는 역할을 합니다. 코드가 실행될 때 주석처리된 모든 내용은 무시됩니다. 파이썬에서 주석은 # 을 통해 작성할 수 있습니다(`# 주석 내용`). `#`이 포함된 줄은 어떤 내용을 입력해도 주석처리 되어집니다.

```python
# 주석 처리 연습
# 이 줄들은 프로그램상에 전혀 영향을 주지 않습니다.
# # 이후의 어떤 내용이 와도 코드로 실행되지 않습니다.
```

큰 따옴표 세개를 사용한 주석(`""" 이곳에 입렵된 텍스트 """`)을 보신 분들도 있을겁니다. 여러 줄의 주석처리를 할 때 사용되기도 하지만 정확하게 말하자면 이는 `docstring` 이라 불리는 문자열 타입(`string`)의 특수한 형태입니다. `docstring`은 함수의 목적과 기능을 설명하는데 주로 사용됩니다.

```python
"""docstring : special string"""
```

주석 처리가 되어있는 부분이 있다면 항상 잘 살펴보는 습관을 가지는 것이 중요합니다.

## 변수(Variables)

변수는 값에 이름을 붙여 사용할 수 있도록 해줍니다. 어떤 값을 저장해놓고 나중에 반복적으로 사용하게 될 경우, 그 값에 이름을 붙여 변수에 저장 할 수 있습니다. 프로그래밍에서의 변수 사용은 기본적으로 대수학에서의 사용과 유사하다고 생각하시면 됩니다. 하지만 파이썬은 추가적으로 변수마다 다른 데이터 타입을 제공합니다.

오늘 살펴볼 가장 기본적인 변수 타입들은 `integers(정수형)`, `floating point numbers(소수점)`, `booleans(참/거짓)`, 그리고 `strings(문자열)`이 있습니다.

`integers(정수형)`은 수학에서의 정수와 같습니다. 파이썬 내장 함수인 `print` 함수를 통해 변수의 값과 타입을 출력해 볼 수 있습니다.

```python
my_integer = 50
print(my_integer, type(my_integer))
```

<center><img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e4d498b2a6b4dddde4f3c/3ce2e2a3b238e70488e56e946a7aa3fd/image.png"></center>

타입에 관계없이 변수는 등호 기호(`=`)를 통해 값을 할당할 수 있습니다. 변수 이름은 대/소문자를 구분하기에 대/소문자를 변경할 경우 완전히 다른 변수가 됩니다.

```python
one = 1
print(One)
```

<center><img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e4d498b2a6b4dddde4f3c/08887e7a993865f95e085ee26968a2e2/image.png"></center>

첫 글씨가 대문자인 One 이라는 변수는 값이 할당되지 않았기 때문에 오류가 발생합니다.

`float` 이라 불려지는 변수 타입은 수학에서 실수(real number)를 나타낸다고 생각하시면 됩니다. `float` 변수를 선언 하기 위해서는 소수점(`.`)을 찍어주시거나 할당하려는 값이 float 임을 나타내 주어야 합니다.

```python
my_float = 1.0
print(my_float, type(my_float))
my_float = float(1)
print(my_float, type(my_float))
```

<center><img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e4d498b2a6b4dddde4f3c/9880605ab33bf656d504512aeb0bef4f/image.png"></center>

`int` 형태의 변수들은 소숫점을 잘라내 버리는 반면 `float` 형태는 특별한 지시가 없다면 소숫점을 반올림하거나 잘라내지 않습니다. 따라서 수치 계산에 있어서는 `float` 형태의 변수가 더 적합하다고 할 수 있습니다.

참고) 이전에 데이터 값이 `float` 형태임을 나타내기 위해 `float()`이라는 함수를 사용하였습니다. 이와 마찬가지로 `int()` 함수를 사용하여 데이터 값을 강제로 `int` 형태로 처리하도록 할 수 있습니다. 이때, 소숫점은 무조건 버려지게 됩니다.

```python
my_int = int(3.14159)
print(my_int, type(my_int))
```
Out : 3 <class 'int'>

이를 응용하여 다음과 같이 반올림 함수를 만들 수 있습니다.

```python
x = 3.49
int(x + 0.5)
```
Out : 3

```python
x = 3.5
int(x + 0.5)
```
Out : 4

`Strings(문자열)` 타입은 텍스트값을 저장할 수 있습니다. 작은 따옴표('')나 큰 따옴표("")를 사용하여 문자열 변수를 할당할 수 있습니다.

```python
my_string = 'This is a string with single quotes'
print(my_string)
my_string = "This is a string with double quotes"
print(my_string)
```

<center><img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e4d498b2a6b4dddde4f3c/c283df1bac05441ecf66296e3565b0bf/image.png"></center>

작은 따옴표와 큰 따옴표 모두 사용 할 수 있기에 다음과 같이 작은 따옴표나 큰 따옴표 자체를 문자열에 저장할 수 있습니다.

```python
my_string = '"Jabberwocky", by Lewis Carroll'
print(my_string)
my_string = "'Twas brillig, and the slithy toves / Did gyre and gimble in the wabe;"
print(my_string)
```

<center><img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e4d498b2a6b4dddde4f3c/c0ad9aa3aee946ce7f78a376489c66c1/image.png"></center>

`Booleans`, 또는 `bools` 타입은 이진 변수입니다. `bool` 타입은 `True(참)`과 `False(거짓)`중 하나의 값만 가질 수 있습니다. 그렇기 때문에 이진 변수라고 불리는것 입니다. 이런 `bool` 타입은 프로그래밍에서 Logical Operators 라는 이름으로 활용되는데 자세한 내용은 추후 다루도록 하겠습니다.

```python
my_bool = True
print(my_bool, type(my_bool))
```
Out : True <class 'bool'>

파이썬에는 위에서 살펴본 데이터 타입 이외에도 많은 타입들이 있지만 이것들이 가장 기본적인 데이터 타입이기에 살표보았습니다. 이번 튜토리얼을 진행하면서 추가적으로 몇가지의 타입들을 더 살펴보도록 하겠습니다.

## 기초 수학연산(Basic Math)

파이썬은 기본적으로 내장된 수학 함수들을 제공합니다. math 패키지를 불러와서 추가적인 수학 함수들을 사용할 수도 있습니다. 

`+`, `-`, `/`, 그리고 `*` 와 같은 기본 4칙연산이 지원되며 지수 계산은 `**`, 모듈러(modular)연산은 `%` 기호로 계산이 가능합니다.

```python
print('Addition: ', 2 + 2)
print('Subtraction: ', 7 - 4)
print('Multiplication: ', 2 * 5)
print('Division: ', 10 / 2)
print('Exponentiation: ', 3**2)

# 15를 4로 나눈 나머지
print('Modulo:', 15 % 4)
```

<center><img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e4d498b2a6b4dddde4f3c/5fb419a8603d01425f5b3d897e083c2a/image.png"></center>

이런 연산은 물론 변수에게도 적용이 가능합니다.

```python
first_integer = 4
second_integer = 5
print(first_integer * second_integer)
```
Out : 20

```python
first_integer = 11
second_integer = 3
print(first_integer / second_integer)
```
Out : 3.6666666666666665

이외에 파이썬에서 자주 쓰이는 수학 함수들은 다음과 같습니다.

* `abs()`
* `round()`
* `max()`
* `min()`
* `sum()`

함수이름에서 유추할 수 있듯 각각의 기능을 수행합니다. `abs()` 는 absolute value 함수로써 절댓값을 반환합니다. `round()` 는 반올림 함수로 지정된 소수점 자릿수에 맞게 반올림된 값을 반환합니다. Default 값은 $0$ 입니다. `max()` 와 `min()` 함수는 숫자열(collection of numbers)에 대해 각각 최댓값과 최솟값을 반환합니다. `sum()` 함수는 숫자열에 대한 합을 반환합니다. 숫자열을 파이썬에서 어떻게 표현하는지는 곧 살펴보도록 하겠습니다.

이외 추가적인 수학 함수는 `math` 패키지를 통해 불러올수 있습니다.

```python
import math
```

math 라이브러리에는 다양한 수학함수들이 구축되어 있습니다. 자세한 내용은 [documentation](https://docs.python.org/2/library/math.html)을 통해 확인 가능합니다.

```python
print('Pi: ',math.pi)
print("Euler's Constant: ", math.e)
```
Out :
Pi:  3.141592653589793
Euler's Constant:  2.718281828459045

```python
print('Cosine of pi: ', math.cos(math.pi))
```
Out : Cosine of pi:  -1.0

## 기초 자료구조
### 리스트(Lists)
파이썬에서 사용되는 `list(리스트)`는 순서가 있는 객체의 모음(ordered collection of objects)으로 어떤 데이터 타입이라도 담을 수 있습니다. `리스트`는 대괄호(`[]`)를 통해 선언 할 수 있습니다.

```python
my_list = [1, 2, 3]
print(my_list)
```
Out : [1, 2, 3]

대괄호 안에 인덱스를 입력하여 리스트 안의 내용(element)에 접근할 수 있습니다. 

```python
print(my_list[0])
print(my_list[2])
```
Out : 
1
3

파이썬에서 인덱싱은 숫자 0부터 시작합니다. 길이가 $n$인 리스트가 있다면 처음 내용물은 인덱스 번호 $0$번에 저장되고 다음 내용물은 인덱스 번호 $1$번에 저장됩니다. 따라서 마지막 내용물은 $n-1$번 인덱스 상에 저장되게 됩니다. 존재 하지 않는 인덱스에 접근할 경우 에러 메시지가 출력되게 됩니다.

```python
print('The first, second, and third list elements: ',
      my_list[0], my_list[1], my_list[2])
print('Accessing outside the list bounds causes an error: ',
      my_list[3])
```

<center><img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e4d498b2a6b4dddde4f3c/30b9513862ff59340ad5e47060c0be88/image.png"></center>

리스트에 몇개의 내용물이 있는지는 `len()` 함수를 통해 확인할 수 있습니다.

```python
print(len(my_list))
```
Out : 3

리스트에 내용물을 변경하고 싶다면 다음과 같이 해당 인덱스 값을 바꾸어 주면 됩니다.

```python
print(my_list)
my_list[0] = 42
print(my_list)
```
Out : 
[1, 2, 3]
[42, 2, 3]

이는 `string(문자열)`타입이 처리되는 방식과 완전히 다른 방식입니다. `리스트` 구조는 위와 같이 내용물의 변경이 자유롭게 가능하지만 `string` 타입과 같은 몇몇 데이터 타입의 경우 내용물의 변경이 불가능합니다. 이와 같은 변경불가능(immutable) 데이터 타입은 일단 만들어지면 새로운 객체를 만들지 않는 이상 변경이 불가능 합니다.

```python
my_string = "Strings never change"
my_string[0]
```
Out : 'S'

```python
my_string[0] = 'Z'
```
<center><img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e4d498b2a6b4dddde4f3c/210d6dd57571c51445e43d61a2a20732/image.png"></center>

위에서 설명하였듯 리스트는 어떤 데이터 타입도 담을 수 있습니다. 다음과 같이 리스트 안에 문자열을 저장 할 수 있습니다.

```python
my_list_2 = ['one', 'two', 'three']
print(my_list_2)
```
Out : ['one', 'two', 'three']

또한 리스트는 다음과 같이 여러가지 서로 다른 타입들을 한번에 담을 수 있습니다.

```python
my_list_3 = [True, 'False', 42]
```

두 가지 리스트를 붙여서 하나로 만들고 싶다면 다음과 같이 `+` 기호를 통해 하나의 리스트로 붙일 수 있습니다.

```python
my_list_4 = my_list + my_list_2 + my_list_3
print(my_list_4)
```
Out : [42, 2, 3, 'one', 'two', 'three', True, 'False', 42]

#### Slicing

리스트에서 하나의 데이터가 아닌 특정 그룹의 데이터에 접근하고자 할 때 슬라이싱(slicing) 기법을 활용 할 수 있습니다. 콜론(`:`) 기호를 통해 리스트를 슬라이싱 할 수 있습니다.

```python
my_list = ['friends', 'romans', 'countrymen', 'lend', 'me', 'your', 'ears']
print(my_list[2:4])
```
Out : ['countrymen', 'lend']

위와 같이 `:`을 사용하여 리스트 상에서 특정 인덱스 그룹에 대한 선택을 할 수 있습니다. 인덱스 2번 위치에 있는 데이터 부터 4번 보다 작은 위치에 있는 데이터(2이상 4미만)에 접근한 모습입니다.

다음과 같이 콜론 뒤에 숫자를 비운다면 특정 지점 이후 모든 데이터에 접근할 수 있습니다.

```python
print(my_list[1:])
```
Out : ['romans', 'countrymen', 'lend', 'me', 'your', 'ears']

이와 비슷하게 콜론 앞에 숫자를 비운다면 특정 지점 이전 까지의 데이터에 접근할 수 있습니다.

```python
print(my_list[:4])
```
Out : ['friends', 'romans', 'countrymen', 'lend']

음수 인덱스를 입력할 경우 마지막 인덱스 부터 카운팅 하여 해당 데이터에 접근 할 수 있습니다. 예를 들어 다음과 같이 `-1`인덱스에 접근한다면 해당 리스트의 마지막 데이터 값이 출력됩니다.

```python
print(my_list[-1])
```
Out : ears

`0:7:2` 와 같이 세번째 숫자를 입력하여 슬라이싱을 할 수 있습니다. 세번째 숫자의 의미는 건너뛸 간격의 사이즈(step size) 입니다. 

```python
print(my_list[0:7:2])
```
Out : ['friends', 'countrymen', 'me', 'ears']

위의 코드를 자세히 살펴보면 먼저 `0:7`은 전체 리스트를 선택했음을 의미합니다(인덱스 0에서 6까지를 의미하기 때문입니다). 그리고 마지막에 step size '2'를 입력하였습니다. 그 결과 `0`번, `2`번, `4`번, `6`번 에 해당하는 데이터 값들이 출력됩니다.

위와 같이 전체 리스트에 대해 step size를 적용할 경우 아래 코드와 같이 시작과 끝 번호에 해당하는 값을 생략해도 무관합니다.

```python
print(my_list[::2])
```
Out : ['friends', 'countrymen', 'me', 'ears']

모든 숫자를 생략하고 `:` 만 입력할 경우 자동적으로 전체 리스트를 선택하게 됩니다.

```python
print(my_list[:])
```
Out : ['friends', 'romans', 'countrymen', 'lend', 'me', 'your', 'ears']

다음과 같이 step size 위치에 음수인 -1을 넣으면 간단하게 역순으로 배열된 리스트를 얻을 수 있습니다.

```python
print(my_list[::-1])
```
Out : ['ears', 'your', 'me', 'lend', 'countrymen', 'romans', 'friends']

`numpy`와 같은 패키지에는 행렬을 표현하는 자료구조가 따로 있지만 파이썬 자체에는 행렬을 구현하는 자료구조가 따로 없습니다. 따라서 파이썬 자체에서 행렬을 구현하기 위해서는 리스트 안의 리스트 구조를 사용합니다.

파이썬의 `range()`라는 내장함수를 통해 리스트를 생성할 수 있습니다. `range()`함수는 몇가지 형태의 입력을 받을 수 있으며 `list()` 명령어와 같이 사용하여 입력 값에 대한 리스트를 얻을 수 있습니다.

(파이썬 2의 경우 `range()`를 단독으로 사용하면 리스트를 얻을 수 있지만 파이썬 3 에서는 `list(range())` 와 같이 사용하여야 원하는 리스트를 얻을 수 있습니다.)

```python
b = 10
my_list = list(range(b))
print(my_list)
```
Out : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

리스트 슬라이싱 기법들을 동일하게 적용할 수 있습니다.

```python
a = 3
b = 10
my_list = list(range(a, b))
print(my_list)
```
Out : [3, 4, 5, 6, 7, 8, 9]

```python
a = 3
b = 10
step = 2
my_list = list(range(a, b, step))
print(my_list)
```
Out : [3, 5, 7, 9]

### 튜플(Tuples)

`튜플(Tuples)` 자료구조는 리스트와 비슷한 데이터 타입으로 서로 다른 종류의 데이터 타입들을 내용물로 가질 수 있습니다. 핵심이 되는 차이점은 `튜플`은 변경불가능(immutable)하다는 것 입니다. 내용물들 사이에 쉼표(`,`)를 입력하여 튜플을 선언 할 수 있습니다. 일반적으로 튜플을 선언할 때 괄호(`()`)를 사용하여 묶어주는 것이 코드 가독성에 좋습니다.

```python
my_tuple = 'I', 'have', 30, 'cats'
print(my_tuple)
```
Out : ('I', 'have', 30, 'cats')

```python
my_tuple = ('I', 'have', 30, 'cats')
print(my_tuple)
```
Out : ('I', 'have', 30, 'cats')

위에서 언급하였듯 튜플은 변경불가능합니다. 어떤 부분도 접근을 하여 수정이 불가능합니다.

```python
# 'cats' 값을 'dogs' 로 바꾸려 한다면 에러가 발생합니다.
my_tuple[3] = 'dogs' 
```

<center><img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e4d498b2a6b4dddde4f3c/4e3945673f83b0427cb274995736ff9c/image.png"></center>

리스트 슬라이싱 기법을 그대로 사용할 수 있습니다.

```python
print(my_tuple[1:3])
```
Out : ('have', 30)

리스트와 마찬가지로 `+` 기호를 통해 합칠 수 있습니다.

```python
my_other_tuple = ('make', 'that', 50)
print(my_tuple + my_other_tuple)
```
Out : ('I', 'have', 30, 'cats', 'make', 'that', 50)

다음과 같이 튜플에 있는 값들을 풀어서(unpacking) 각 변수에 할당 할 수 있습니다.

```python
str_1, str_2, int_1 = my_other_tuple
print(str_1, str_2, int_1)
```
Out : make that 50

이렇게 값들을 풀어줄 때는 튜플에 있는 값들이 순서대로 왼쪽에 입력한 변수들에 할당되어 집니다.

### 집합(Sets)

`집합(Sets)`자료구조는 순서가 없고(unordered) 중복된 값을 제거하는 자료구조 입니다. 학창시절 수학책 맨 앞에 나와 열심히 공부했던 집합의 개념과 거의 유사하다고 생각하시면 됩니다. `Set`은 중괄호 (`{}`)를 사용하여 정의할 수 있습니다.

```python
things_i_like = {'dogs', 7, 'the number 4', 4, 4, 4, 42, 'lizards',
                 'man I just LOVE the number 4'}
print(things_i_like, type(things_i_like))
```
Out : 
{'lizards', 4, 'the number 4', 7, 'dogs', 42, 'man I just LOVE the number 4'} <class 'set'>

출력 결과를 살펴봤을 때 중복되어 포함된 4는 중복이 제거되어 한번만 출력된 것을 확인할 수 있습니다.

다음과 같이 `set()` 함수를 통해 리스트로 부터 `set` 자료구조 형태를 만들어 낼 수 있습니다.

```python
animal_list = ['cats', 'dogs', 'dogs', 'dogs', 'lizards', 'sponges', 
               'cows', 'bats', 'sponges']
animal_set = set(animal_list)
print(animal_set) # 리스트에서 중복된 값을 제거 할 수 있습니다.
```
Out : {'lizards', 'dogs', 'cows', 'sponges', 'cats', 'bats'}

`len()`함수를 활용하여 몇 종류의 동물이 있는지 다음과 같이 볼 수 있습니다.

```python
print(len(animal_set))
```
Out : 6

`Set` 타입은 순서가 없기 때문에 set[0]과 같이 특정 인덱스 값을 통해 데이터에 접근할 수 없습니다. 하지만 다음과 같이 어떤 원소가 들어있는지 체크는 가능합니다.

```python
# 'in' 키워드를 사용하여 'cats' 가 animal_set 에 들어있는지 확인가능합니다.
'cats' in animal_set
```
Out : True

String 'cats' 가 animal_set에 들어가 있기 때문에 True 값이 반환됩니다.

학창시절 배운 교집합과 합집합연산을 `&` 와 `|` 연산자를 통해 구현할 수 있습니다.

```python
# 교집합 연산을 수행하여 출력합니다.
print(animal_set & things_i_like)
```
Out : {'lizards', 'dogs'}

```python
# 합집합 연산을 수행하여 출력합니다.
print(animal_set | things_i_like)
```
Out :
{'lizards', 4, 'the number 4', 7, 'dogs', 42, 'cows', 'sponges', 'cats', 'man I just LOVE the number 4', 'bats'}

이 외에도 `set`과 관련된 다양한 파이썬 내장함수들을 살펴보시려면 공식 [Documentation](https://docs.python.org/2/library/sets.html) 을 확인해 주세요.

### 딕셔너리(Dictionaries)

딕셔너리는 또 하나의 가장 중요한 자료구조 형태로 중괄호(`{}`)와 콜론(`:`)을 사용하여 정의할 수 있습니다.

중괄호는 딕셔너리의 처음과 끝 부분을 나타내고 콜론 기호는 키(key) 와 값(value)의 쌍을 나타냅니다. 딕셔너리는 본질적으로 key-value의 쌍으로 이루어진 집합(set) 자료구조 입니다. 딕셔너리의 키(key)는 변경불가능한 자료형 이어야 합니다. 따라서 문자열(string)과 튜플(tuple)은 키(key)로 쓰일 수 있습니다. Key 값들은 추가되거나 삭제가 가능합니다.

아래의 예제는 딕셔너리를 생성하는 예제입니다. 여기서 Key는 책의 장르를 나타내는 `string` 타입의 데이터이고 value는 `list` 타입으로 해당 Key에 속하는 책들을 담고있습니다.

```python
my_dict = {"High Fantasy": ["Wheel of Time", "Lord of the Rings"], 
           "Sci-fi": ["Book of the New Sun", "Neuromancer", "Snow Crash"],
           "Weird Fiction": ["At the Mountains of Madness", "The House on the Borderland"]}
```

다음과 같이 접근을 원하는 Key를 입력하여 해당하는 Value를 확인할 수 있습니다.

```python
print(my_dict["Sci-fi"])
```
Out : ['Book of the New Sun', 'Neuromancer', 'Snow Crash']

어떤 Key값에 연결된 Value를 자유롭게 수정할 수 있습니다.

```python
my_dict["Sci-fi"] = "I can't read"
print(my_dict["Sci-fi"])
```
Out : I can't read

새로운 key-value 쌍을 추가 하고자 한다면 다음과 같이 선언해 주면 됩니다.

```python
my_dict["Historical Fiction"] = ["Pillars of the Earth"]
print(my_dict["Historical Fiction"])
```
Out : ['Pillars of the Earth']

```python
print(my_dict)
```
Out : 
{'High Fantasy': ['Wheel of Time', 'Lord of the Rings'], 'Sci-fi': "I can't read", 'Weird Fiction': ['At the Mountains of Madness', 'The House on the Borderland'], 'Historical Fiction': ['Pillars of the Earth']}

## 문자열 처리하기

위에서 살펴 보았듯이 `string` 타입은 텍스트를 표현하는데 주로 사용됩니다. 여기서는 몇가지 내장함수들을 살펴보고 필요에 맞게 문자열을 다룰 수 있는 방법들을 알아보도록 하겠습니다.

```python
first_string = 'I am '
second_string = 'a boy'
third_string = first_string + second_string
third_string
```
Out : 'I am a boy'

스트링 자료형 또한 인덱싱이 되어 있기 때문에(ordered) 리스트 슬라이싱 기법들을 똑같이 활용할 수 있습니다.

```python
my_string = 'Supercalifragilisticexpialidocious'
print('The first letter is: ', my_string[0]) # 대문자 S
print ('The last letter is: ', my_string[-1]) # 소문자 s
print ('The second to last letter is: ', my_string[-2]) # 소문자 u
print ('The first five characters are: ', my_string[0:5]) # Super
print ('Reverse it!: ', my_string[::-1]) # 문자열 역순으로 출력
```
Out
The first letter is:  S
The last letter is:  s
The second to last letter is:  u
The first five characters are:  Super
Reverse it!:  suoicodilaipxecitsiligarfilacrepuS

내장된 객체(built-in objects)들은 객체들과 연결된 특별한 함수들을 가질 수 있습니다. 이를 `메서드(methods)`라고 합니다. 마침표(`.`)를 사용하여 메서드에 접근할 수 있습니다. 나중에 다른 강좌에서 이에대해 자세히 다루도록 하겠습니다.

* **count()** 메서드을 활용하여 다음과 같이 특정 문자열이 몇 번 등장하는지 셀 수 있습니다.

```python
print('Count of the letter i in Supercalifragilisticexpialidocious: ', 
      my_string.count('i'))
print('Count of "li" in the same word: ', 
      my_string.count('li'))
```
Out
Count of the letter i in Supercalifragilisticexpialidocious:  7
Count of "li" in the same word:  3

* **find()** 메서드를 활용하여 특정 값이 제일 처음 나오는 곳의 위치(인덱스)를 찾을 수 있습니다.

```python
print('The first time i appears is at index: ', my_string.find('i'))
```
Out : The first time i appears is at index:  8

* **replace()** 메서드를 활용하여 문자열을 부분적으로 치환할 수 있습니다.

```python
print("All i's are now a's: ", my_string.replace('i', 'a'))
```
Out : All i's are now a's:  Supercalafragalastacexpaaladocaous

```python
print("It's raining cats and dogs".replace('dogs', 'more cats'))
```
Out : It's raining cats and more cats

* **upper()** 과 **lower()** 메서드를 활용하여 문자열을 대문자/소문자 로 변경 가능합니다.

```python
my_string = "I can't hear you"
print(my_string.upper())
my_string = "I said HELLO"
print(my_string.lower())
```
Out
I CAN'T HEAR YOU
i said hello

### 문자열 포맷팅(String Formatting)

`format()` 메서드를 사용하여 문자열을 포맷팅 할 수 있습니다.

```python
my_string = "{0} {1}".format('Marco', 'Polo')
print(my_string)
```
Out : Marco Polo

```python
my_string = "{1} {0}".format('Marco', 'Polo')
print(my_string)
```
Out : Polo Marco

중괄호(`{}`)를 사용하여 문자열이 채월질 곳임을 나타낼 수 있고 안에 들어가는 숫자를 통해 몇 번째로 채워지는 곳인지 표기가 가능합니다.

`format()`과 관련된 자세한 설명은 공식 [Documentation](https://docs.python.org/2/library/string.html#format-examples) 을 참고해 주세요.

포맷팅의 다른 방법으로는 다음과 같이 `%`를 사용하는 방법이 있습니다.

```print('insert %s here' % 'value')```

```python
print('There are %s cats in my %s' % (13, 'apartment'))
```
Out : There are 13 cats in my apartment

여기서 `%s` 는 파이썬 상에서 지정된 값을 문자열로 변환하여 처리하라는 의미 입니다. formatting [documentation](https://docs.python.org/2/library/stdtypes.html#string-formatting)을 확인하여 추가적인 예제들과 기호들을 확인 할 수 있습니다.

## 논리 연산자(Logical Operators)
### 기초 논리(Basic Logic)

논리 연산자는 `boolean` 값들을 처리하는 연산자들을 의미합니다. `bool`타입은 `참(True)`과 `거짓(False)` 중 하나의 값(또는 $1$이나 $0$)만 가질 수 있습니다.

학창시절 '명제'란 참과 거짓을 구분할 수 있는 문장 이라고 배웠습니다. 파이썬에서도 이런 참과 거짓을 명확히 구분되는 구문(statement)을 `==` (같다), `!=` (같지 않다), `<` (작다), `>` (크다), `<=` (작거나 같다), 그리고 `>=` (크거나 같다) 와 같은 기호를 통해 표현 할 수 있습니다.

```python
print(5==5)
```
True

```python
print(5>5)
```
False

이는 물론 변수에도 적용이 가능합니다.

```python
m = 2
n = 23
print(m < n)
```
True

참이나 거짓 값을 갖는 값이 두개 있을 때, `or`,`and`,`not`과 같은 논리 연산자(logical operator)를 정의할 수 있습니다. 

```python
statement_1 = 10 > 2
statement_2 = 4 <= 6
print("Statement 1 truth value: {0}".format(statement_1))
print("Statement 2 truth value: {0}".format(statement_2))
print("Statement 1 and Statement 2: {0}".format(statement_1 and statement_2))
```
Statement 1 truth value: True
Statement 2 truth value: True
Statement 1 and Statement 2: True

`or` 연산자는 논리적 `or` 연산을 수행합니다. 두가지 statement 중 하나라도 `참(True)`값을 가지고 있다면 전체 구문도 `True`가 됩니다. `and` 연산자는 두 statement가 모두 `True`일 경우 에만 `True`값을 반환합니다. 그러지 않다면 `False` 값을 반환합니다. `not` 연산자는 뒤에 있는 statement의 진위값(True or False)를 거꾸로 출력하는 연산자 입니다. `not`뒤의 statement가 `True`라면 `False`를 `False`라면 `True`를 반환합니다.

P와 Q라는 두개의 logical statements를 가지고 있을 때 각각 경우에 대한 연산값은 다음 표와 같이 나오게 됩니다.

|  P  |  Q  | `not` P| P `and` Q | P `or` Q|
|:-----:|:-----:|:---:|:---:|:---:|
| `True` | `True` | `False` | `True` | `True` |
| `False` | `True` | `True` | `False` | `True` |
| `True` | `False` | `False` | `False` | `True` |
| `False` | `False` | `True` | `False` | `False` |


```python
print(((2 < 3) and (3 > 0)) or ((5 > 6) and not (4 < 2)))
```
True

위의 결과가 출력되는 과정을 살펴보면 다음과 같습니다.

* (`True and True`) `or` (`False and not False`)
* `True or (False and True`)
* `True` or `False`
* `True`

#### 진위값(Truthiness)

`bool()` 함수는 어떤 값을 참/거짓 형태로 바꾸어주는 함수 입니다. 그렇다면 어떤 경우에 `참(True)`이 나오고 어떤 경우에 `거짓(False)`이 나오게 될까요? 일반적으로 string, tuple, dictionaries, lists의 경우 내용물이 하나라도 들어있다면 참 값이 반환되고 비어 있다면 거짓 값이 반환됩니다.

<center><img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e4d498b2a6b4dddde4f3c/73ba084373e3b2b8c77d23c2cde0f75d/image.png"></center>

숫자의 경우 0이면 False, 그 이외에는 True 가 나옵니다.

### If 구문

특정 조건을 만족할 때 어떤 코드를 실행시키고 싶다면 If 구문을 사용하여 이를 구현할 수 있습니다.

다음과 같은 코드에서 `if`문 안의 condition이 참 이라면 안에있는 코드가 실행됩니다. 만약 condition이 거짓이라면 if문 내부의 코드는 스킵되고 `else` 구문이 있는 곳으로 가서 나머지 코드가 실행되게 됩니다. 만약 `else`구문이 없다면 아무 일도 일어나지 않습니다. 이 때 condition은 위에서 배운 논리 연산자를 통해 표현되거나 진위값을 통해 설정 할 수 있습니다. if 구문은 콜론(`:`)과 indented text(4-스페이스 또는 tab)을 통해 정의 할 수 있습니다.

```python
# if 구문의 기초적인 뼈대 입니다.
# 여기서 "Condition"은 공백이 아니기 때문에 항상 True 입니다. 
# 여기서는 if 문이 사용되는 형태를 익히시면 됩니다.
if "Condition": 
    # "Condition"은 공백이 아닌 문자열이기 때문에 True 값을 가지게 되고
    # 이 예제에서 이곳의 indent 되어진 코드는 항상 실행됩니다.
    print(True)
else:
    # 만약 condition이 거짓이라면 이곳의 코드가 처음 블록의 코드 대신 실행되게 됩니다.
    print(False)
# 이 예제에서 else에 있는 코드는 절대 실행되지 않습니다. 
# 왜냐하면 "Condition"의 진위값이 True 이기 때문입니다.
```
True

```python
i = 4
if i == 5:
    print('The variable i has a value of 5')
```
(아무것도 출력되지 않음)

위 예제를 살펴보면 i 값이 4이기 때문에 i==5 라는 명제(statement)는 거짓 값을 가지게 되고 아무런 문구도 출력이 되지 않습니다. 위에 코드에 else문을 추가함으로써 아래와 같이 실행되는 부분을 만들 수 있습니다.

```python
i = 4
if i == 5:
    print("All lines in this indented block are part of this block")
    print('The variable i has a value of 5')
else:
    print("All lines in this indented block are part of this block")
    print('The variable i is not equal to 5')
```
All lines in this indented block are part of this block
The variable i is not equal to 5

if 문에서 조건이 거짓이라 빠져나왔을 때 또 다른 조건을 확인해 볼 수 있도록 `elif` 구문을 첨가할 수 있습니다. `elif`는 "else if"의 줄임말 입니다. 한개의 if 구문에 여러개의 `elif`구문들을 포함할 수 있습니다.

```python
i = 3
if i == 1:
    print('The variable i has a value of 1')
elif i == 2:
    print('The variable i has a value of 2')
elif i == 3:
    print('The variable i has a value of 3')
else:
    print("I don't care what i is")
```
The variable i has a value of 3

if 구문을 다음과 같이 중첩하여 사용할 수 있습니다. 

```python
i = 10
if i % 2 == 0:
    if i % 3 == 0:
        print ('i is divisible by both 2 and 3! Wow!')
    elif i % 5 == 0:
        print ('i is divisible by both 2 and 5! Wow!')
    else:
        print ('i is divisible by 2, but not 3 or 5. Meh.')
else:
    print('I guess that i is an odd number. Boring.')
```
i is divisible by both 2 and 5! Wow!

위에서 공부한 논리 연산자(Logical Operator)를 사용하여 여러개의 조건을 묶어서 하나의 if문에 집어넣을 수 있습니다.

```python
i = 5
j = 12
if i < 10 and j > 11:
    print('{0} is less than 10 and {1} is greater than 11!'.format(i, j))
```
5 is less than 10 and 12 is greater than 11!

문자열 변수에도 적용이 가능합니다.

```python
my_string = "Carthago delenda est"
if my_string == "Carthago delenda est":
    print('And so it was! For the glory of Rome!')
else:
    print('War elephants are TERRIFYING. I am staying home.')
```
And so it was! For the glory of Rome!

다음과 같이 문자열에도 `<` 또는 `>`와 같은 비교 연산자를 적용할 수 있습니다. 

<center><img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e4d498b2a6b4dddde4f3c/6874579d473f02beb80adb29f6d4ff8f/image.png"></center>

자세한 설명은 [문자열의 사전식 순서](https://en.wikipedia.org/wiki/Lexicographical_order) 항목을 참고해 주세요.

몇몇 내장 함수들은 `bool`타입의 데이터를 반환합니다. 따라서 이들은 if문의 조건으로 바로 사용이 가능합니다. 사용자가 만든 함수가 `bool` 타입의 데이터를 반환한다면 이 또한 if문의 조건으로 사용이 가능합니다. 이에 대한 자세한 이야기는 뒤에서 다루도록 하겠습니다.

앞에서 잠깐 살펴봤던 `in` 키워드 또한 if 구문에 사용이 가능합니다.

```python
if 'a' in my_string or 'e' in my_string:
    print('Those are my favorite vowels!')
```
Those are my favorite vowels!

## 반복문(Loop Structures)

반복문은 프로그래밍에서 가장 중요한 파트중 하나 입니다. `for`문과 `while`문은 내부의 코드 블럭을 반복적으로 실행하도록 해줍니다. `while`문의 경우 탈출조건이 참 값이라면 계속 코드가 실행됩니다. 어떤 시점에 탈출조건이 거짓이 된다면 그 다음 반복 시 반복문을 빠져나가게 됩니다. `for`문의 경우 어떤 수열(sequence)의 값을 따라서 반복문이 진행되고 수열이 끝나게 되면 반복문도 종료 됩니다.

```python
i = 5
while i > 0: # 0이 False이기 때문에 이 부분은 'while i:' 라고 표기가 가능합니다.
    i -= 1
    print('I am looping! {0} more to go!'.format(i))
```
I am looping! 4 more to go!
I am looping! 3 more to go!
I am looping! 2 more to go!
I am looping! 1 more to go!
I am looping! 0 more to go!

`while` 문을 사용할 때에는 탈출조건에 들어간 값이 루프가 반복됨에 따라 변화함을 항상 확인해야 합니다. 그렇지 않으면 탈출조건이 항상 참이 되고 무한 루프에 빠지게 됩니다. 위의 예제에서 `i`라는 변수를 탈출조건에 사용하였고 `i` 값은 루프 내부에서 `i -= 1`(`i = i - 1`의 줄임 명령어)이라는 명령어를 통해 변화하게 됩니다. 루프가 반복되면서 `i` 값은 점점 줄어들게 되고 0이 되는 순간이 있게 됩니다. 그 다음 루프가 시작하기 전 탈출조건이 False가 되고 루프에서 탈출하게 됩니다. 그래서 출력된 결과를 보시면 0 까지 프린트가 되어 있습니다.

`for`문은 지정된 횟수만큼만 반복을 실행합니다. 아래와 같이 `range()`함수를 사용할 경우 `i` 값이 `range(5)`에 해당하는 `[0,1,2,3,4,5]` 내부의 값들을 가지면서 반복이 실행됩니다.

```python
for i in range(5):
    print('I am looping! I have looped {0} times!'.format(i + 1))
```
I am looping! I have looped 1 times!
I am looping! I have looped 2 times!
I am looping! I have looped 3 times!
I am looping! I have looped 4 times!
I am looping! I have looped 5 times!

위에서 `in` 키워드를 통해 해당 데이터가 자료구조에 들어있는지 여부를 파악한다고 배웠습니다. 하지만 이 `in` 키워드는 위와 같이 `for`문을 구성하는데도 사용됩니다. `in` 키워드 뒤에는 리스트, 튜플, 집합(set)과 같은 다른 자료구조들도 올 수 있습니다.

```python
my_list = {'cats', 'dogs', 'lizards', 'cows', 'bats', 'sponges', 'humans'} # Lists all the animals in the world
mammal_list = {'cats', 'dogs', 'cows', 'bats', 'humans'} # Lists all the mammals in the world
my_new_list = set()
for animal in my_list:
    if animal in mammal_list:
        # This adds any animal that is both in my_list and mammal_list to my_new_list
        my_new_list.add(animal)
        
print(my_new_list)
```
{'humans', 'dogs', 'cats', 'bats', 'cows'}

`for`와 `while`문 같은 반복문을 구성할 때 `break`와 `continue` 구문을 활용하여 손쉽게 반복문을 다룰 수 있습니다. 먼저 루프가 실행되는 동안 어디서든 `break` 구문을 마주치게 되면 반복문을 즉시 탈출합니다.

```python
i = 10
while True:
    if i == 14:
        break
    i += 1 # i = i + 1 과 같은 표현 입니다.
    print(i)
```
11
12
13
14

```python
for i in range(5):
    if i == 2:
        break
    print(i)
```
0
1

루프가 돌다가 `continue` 구문을 만난다면 그 루프를 넘어가고 다음 루프로 바로 진행하게 됩니다.

```python
i = 0
while i < 5:
    i += 1
    if i == 3:
        continue
    print(i)
```
1
2
4
5

위의 출력 결과를 살펴보면 $3$이 없음을 확인할 수 있습니다. 이는 `i`가 3이 되었을 때 if문을 통해 조건에 걸리게 되고 contine 구문을 만나 `i`를 출력하는 일 없이 바로 다음 루프로 넘어가기 때문입니다.

반복을 위해 사용된 변수(예제에서 `i`) 또는 반복문 내부에서 정의된 변수는 반복 루프가 끝나더라도 값이 지워지지 않고 루프가 끝날 때의 값을 유지합니다. 다음 예제에서 루프가 끝났을 때 `i`값이 4로 유지됨을 확인 할 수 있고 루프 내부에서 정의된 `loop_string` 값도 그대로 살아있음을 볼 수 있습니다.

```python
for i in range(5):
    loop_string = 'I transcend the loop!'
    print ('I am eternal! I am {0} and I exist everywhere!'.format(i))

print ('I persist! My value is {0}'.format(i))
print (loop_string)
```
I am eternal! I am 0 and I exist everywhere!
I am eternal! I am 1 and I exist everywhere!
I am eternal! I am 2 and I exist everywhere!
I am eternal! I am 3 and I exist everywhere!
I am eternal! I am 4 and I exist everywhere!
I persist! My value is 4
I transcend the loop!

딕셔너리 자료형도 `for`문을 통해 반복할 수 있습니다.

```python
my_dict = {'firstname' : 'Inigo', 'lastname' : 'Montoya', 'nemesis' : 'Rugen'}
for key in my_dict:
    print(key)
```
firstname
lastname
nemesis

위와 같이 딕셔너리를 `in` 키워드를 통해 반복시키면 자동적으로 key 값이 반복되어 집니다. value 값에 접근하고자 한다면 다음과 같이 접근이 가능합니다.

```python
for key in my_dict:
    print (my_dict[key])
```
Inigo
Montoya
Rugen

동시에 key, value 값을 다루고 싶다면 `items()`함수를 통해 하나의 루프에서 동시에 key-value 쌍에 접근이 가능합니다.

```python
for key, value in my_dict.items():
    print(key, ':', value)
```
firstname : Inigo
lastname : Montoya
nemesis : Rugen

`items()`함수는 key-value 쌍을 튜플로 만들어 줍니다. 그 뒤 for 문에서 해당 튜플을 key, value 라는 변수에 unpacks 해 주고 반복이 진행되는것 입니다.

## 함수(Functions)

함수(Function)은 계산을 하거나, 데이터를 내보내거나, 당신이 원하는 것을 할 수 있는 재사용이 가능한 코드 블럭을 의미합니다. 프로그래밍 언어를 쓰는 이유 중 하나가 이런 함수를 만들어두고 재사용이 가능하기 때문입니다. 파이썬에 있는 내장함수 이외에도 우리가 원하는 함수를 자유롭게 만들어서 사용할 수 있습니다.

```python
def hello_world():
    """ Prints Hello, world! """
    print('Hello, world!')

hello_world()
```
Hello, world!

```python
for i in range(5):
    hello_world()
```
Hello, world!
Hello, world!
Hello, world!
Hello, world!
Hello, world!

`def`명령어를 통해 함수를 정의(define) 할 수 있습니다.

<center><img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e4d498b2a6b4dddde4f3c/439af7e9e7100411286f92a4b3b60646/image.png"></center>

처음 만든 `hello_world()` 함수는 호출 되면 언제나 문자열을 출력합니다. 따로 반환하는 값은 없습니다. 어떤 계산된 값이나 반환값이 필요하다면 그 값을 함수에서 `반환(return)` 해줘야 합니다. 또한 함수 내부에서 선언된 변수는 일반적으로 함수 바깥에서는 사용할 수 없습니다.

```python
def see_the_scope():
    in_function_string = "I'm stuck in here!"

see_the_scope()
print(in_function_string)
```

<center><img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5c2e4d498b2a6b4dddde4f3c/3f630ef2ba9fd57d99983af392000b3c/image.png"></center>

변수의 **범위**는 해당 변수가 그 값과 연관되어 있는 코드의 범위를 의미합니다. 파이썬에서 함수의 경우 닫힌 범위(enclosed scope)를 가지게 됩니다. 이는 위에 코드에서 처럼 함수 밖에서는 함수 내부에서 만들어진 변수에 접근이 불가능함을 의미합니다. 함수 내부의 값을 밖에서 활용하기 위해서는 함수 내부에서 반환(return)을 해주어야 합니다. 반환된 값을 함수 밖에서 받는다면 문제 없이 값을 전달받을 수 있습니다.

다음 예제에서 처럼 함수 내부에서 선언된 변수를 return 함으로써 함수 바깥에서 사용하거나 출력할 수 있습니다.

```python
def free_the_scope():
    in_function_string = "Anything you can do I can do better!"
    return in_function_string
my_string = free_the_scope()
print(my_string)
```
Anything you can do I can do better!

함수 바깥에서 내부의 변수를 받는것처럼 반대로 함수 바깥의 데이터를 함수로 전달도 가능합니다. 이는 `파라미터`를 설정함으로써 가능합니다.

```python
def multiply_by_five(x):
    """ input에 5를 곱한값을 반환합니다. """
    return x * 5

n = 4
print(n)
print(multiply_by_five(n))
```
4
20

위의 예제에서는 `x`라는 하나의 파라미터를 사용하였지만 쉼표(`,`)를 통해 여러개의 파라미터를 추가할 수 있습니다.

```python
def calculate_area(length, width):
    """ 직사각형의 넓이를 계산하여 반환합니다. """
    return length * width
```

```python
l = 5
w = 10
print('Area: ', calculate_area(l, w))
print('Length: ', l)
print('Width: ', w)
```
Area:  50
Length:  5
Width:  10

만약 입력 받을 파라미터의 갯수가 정해지지 않았다면 별표기호(`*`)를 사용하여 이를 처리할 수 있습니다.

```python
def sum_values(*args):
    sum_val = 0
    for i in args:
        sum_val += i
    return sum_val
```

```python
print(sum_values(1, 2, 3))
print(sum_values(10, 20, 30, 40, 50))
print(sum_values(4, 2, 5, 1, 10, 249, 25, 24, 13, 6, 4))
```
6
150
343

위와 같이 몇개의 값들이 함수로 전달될지 모를 경우 `*args`와 같은 방식으로 입력을 받을 수 있습니다. 별표(`*`) 기호는 '이 함수가 임의의 개수로 값들을 받을 것이다.' 라는 것을 표시하는 파이썬 문법입니다. 이렇게 입력된 값들은 튜플(tuples)의 형태로 저장됩니다.

```python
def test_args(*args):
    print(type(args))

test_args(1, 2, 3, 4, 5, 6)
```
<class 'tuple'>

위에서 쓴 `*args`라는 표현은 관습적인 표현으로 `*vars` 또는 `*things`와 같이 임의로 이름을 바꾸어 사용하여도 문제가 없습니다. 또한 함수 내부에서 `args`는 튜플 타입을 가지기 때문에 위에서 배운 방식으로 각 내용물에 접근이 가능합니다. 다만 튜플형의 특성상 내용물의 수정은 불가능 합니다.

우리가 만든 함수들은 어떤 데이터 타입이나 반환이 가능합니다. 함수가 `bool`타입을 반환하게 한다면 이를 조건(condition)으로 사용이 가능합니다. 예를 들어 알파벳 모음이 들어있는지 체크하여 모음이 들어있다면 `True`를 들어있지 않다면 `False`를 반환하는 함수를 다음과 같이 만들 수 있습니다.

```python
def has_a_vowel(word):
    """ 
    단어에 모음이 들어가 있는지 확인하는 함수 입니다. 
    모음인 a,e,i,o,u 가 들어가 있다면 True를
    그렇지 않다면 False를 반환합니다.
    """
    vowel_list = ['a', 'e', 'i', 'o', 'u']
    
    for vowel in vowel_list:
        if vowel in word:
            return True
    # a,e,i,o,u 가 모두 없다면 False가 반환됩니다.
    return False
```

```python
my_word = 'PJP'
has_a_vowel(my_word)
```
False

```python
my_word = 'catnapping'
has_a_vowel(my_word)
```
True

```python
if has_a_vowel(my_word):
    print('How surprising, an english word contains a vowel.')
else:
    print('This is actually surprising.')
```
How surprising, an english word contains a vowel.

```python
def point_maker(x, y):
    """ 
    2차원 상의 x,y 좌표를 반환하는 함수입니다.
    사실 튜플과 같습니다.
    """
    return x, y
```

위의 함수는 숫자의 순서쌍을 입력받아 $R^2$ 공간의 한 점, (x,y)로 반환합니다.

```python
a = point_maker(0, 10)
b = point_maker(5, 3)

def calculate_slope(point_a, point_b):
    """ 두 점을 지나는 직선의 기울기를 계산하여 반환합니다. """
    return (point_b[1] - point_a[1])/(point_b[0] - point_a[0])

print("The slope between a and b is {0}".format(calculate_slope(a, b)))
```
The slope between a and b is -1.4

위의 함수는 두 점을 지나는 직선의 기울기를 계산하여 반환하는 함수입니다.

이를 이용하여 다음과 같이 두 점을 지나는 직선의 방정식을 출력할 수 있습니다.

```python
print("""The slope-intercept form of the line between a and b, using point a, is: y - {0} = {2}(x - {1})""".format(a[1], a[0], calculate_slope(a, b)))
```
The slope-intercept form of the line between a and b, using point a, is: y - 10 = -1.4(x - 0)

위에서 공부한 자료구조의 특성들과 코드 작성에 필요한 문법(syntax)을 잘 지키기만 한다면 어떤 계산이든 해서 값을 반환하는 함수를 손쉽게 만들 수 있습니다. 이는 모든 프로그래밍 언어에서 가장 중요한 부분이므로 잘 숙지해 두시길 바라겠습니다. 감사합니다.

