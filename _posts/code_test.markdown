---
layout: post
title: test
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
python

```css
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
css


```pythonstub
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
pythonstub

```angularjs
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
angularjs

```markdown
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
markdown

```cython
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
cython

```html
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
html

```javascript
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
javascript

```javascript 1.8
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
javascript 1.8