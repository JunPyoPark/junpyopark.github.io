---
layout: post
title: Markdown 
date: 2019-01-05 00:38:13 +0300
description: null
img: sentimentanalysis.jpg
tags: [Stock Market, Network Theory, Sentiment Analysis]
---

# <center> Stock Market Prediction - Network applied News Sentiment Analysis - </center>
by JunPyo Park (UNIST Mathematical Science Department)

* [junpyopark.github.io](https://junpyopark.github.io)
* [소셜 미디어 감성분석을 통한 주가예측](https://junpyopark.github.io/social_stock/)
* [Eigenvector Centrality](https://en.wikipedia.org/wiki/Eigenvector_centrality)


---

<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5bd55306d773518844d461d7/b0ed1d65d21f3be70341e78f6959555a/Final_Poster.JPG">

### 1. Crawling the News Data from NAVER NEWS

<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5bd55306d773518844d461d7/7296095a2a8551836d2e25f44dfb1f6e/image.png">

```python
def get_title_data(code): # 1년간의 기사 데이터 받아오기
    p = 0
    data = pd.DataFrame(columns=['title','Link','info'])

    while True:
        p = p + 1
        time.sleep(0.3 + np.random.rand())
        url = 'http://finance.naver.com/item/news_news.nhn?code={code}&page={page}&sm=title_entity_id.basic&clusterId='
        soup = bs4.BeautifulSoup(requests.get(url.format(code=code, page=p), headers={'User-Agent': agent.random}).text, 'lxml')
        alist = soup.select('tr')
        print('Page : ',p, '    Articles : ',len(alist))
        if len(alist) < 11 :
            break
        for tr in alist:
            try:
                href = 'http://finance.naver.com' + tr.select('a')[0]['href']
                title = tr.select('a')[0].text.strip()
                info = tr.select('.info')[0].text.strip()
                date = tr.select('.date')[0].text.strip()
                dt = datetime.datetime.strptime(date, "%Y.%m.%d %H:%M")
                data.loc[dt] = [title, href, info]
                # print(href, title, info, date)
            except IndexError as e:
                continue
    data.to_csv(code + '.csv')
    return data
```

<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5bd55306d773518844d461d7/cf6968a20511d58fade2e2551785a1a8/image.png">

### 2. Processing the Article Data ( Data Cleansing )

#### Clean the text using the regular expression filter process

<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5bd55306d773518844d461d7/7fb78b5f4d13a1c1da188116383ce11d/image.png">

### 3. Translate the articles to English

#### googletrans 모듈 사용

```python
from googletrans import Translator
translator = Translator()
```

#### Translated Results

<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5bd55306d773518844d461d7/37d2b4b3b23f1252b7ff266f38168f27/image.png">

### 4. Construct the Sentiment Network

<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5bd55306d773518844d461d7/43ff9cb24ae5d077f9960b482e9dbcd4/image.png">

#### Through the network construction, we can choose the word, which is the most influential. Measure of weight is eigenvector centrality.

### Why Eigenvector Centrality?

#### There is so many word whose sentiment is neutral. Using eigenvector centrality, we can *reflect its influence on the neighbor whose sentiment is not neutral.*

```python
 for i in range(len(stock_data_title_trans)):
        text = re.sub("[^\w]", " ", stock_data_title_trans[i]).split()
        stock_data_title_word[i] = text
    
    node = []
    for i in range(len(stock_data_title_trans)):
        node += stock_data_title_word[i]
    
    link = []
    for i in range(len(stock_data_title_trans)):
        for s in stock_data_title_word[i]:
            for t in stock_data_title_word[i]:
                if s != t:
                    link += [(s,t)]
    
    G = nx.Graph()
    G.add_nodes_from(node)
    G.add_edges_from(link)
    try:
        stock_data_cent += [dict(nx.eigenvector_centrality(G))]
    except:
        return 0
```

### 5. Sentiment Analysis with Eigenvector Centrality as a Weigth

```python
for w in node:
        ss=sid.polarity_scores(w)
        stock_sentiment[w]=ss['compound']
        
    c=0
    for i in node:
        c+=1
        result += stock_sentiment[i]*stock_data_cent[0][i]
    result = result / c
    
    return result
```

#### Example Result Plot

<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5bd55306d773518844d461d7/d57cace4df019af93043049e6c08f775/image.png">

#### Average Prediction Rate Comparison

 Comparison between Simple Model and Network Applied Model

<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5bd55306d773518844d461d7/fc1114252afc9091c986c96ece29a675/image.png">

#### Weekly Prediction Rate Table

Weekly Results for each starting days

<img src = "https://trello-attachments.s3.amazonaws.com/5b29ec749cfb0d90ada47d03/5bd55306d773518844d461d7/15d90e82f6c7fdcc6fa49f662c82c629/image.png">

### Conclusion

 - In **daily prediction**, difference between simple model and network model is ambiguous.

 - But, in **weekly prediction**, difference between simple model and network model is clear. We observed **improvement** that the stock market prediction model through sentiment analysis of news using network.

 - Network's **advantage** for stock market prediction using sentimnet analysis is more clear if data is more enough.
