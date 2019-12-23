# Chain of responsibility - 責任鏈模式
## 目的
讓多個物件都有機會可以處理請求，以避免請求的發送者和接受者之間產生耦合關係。將這些物件連成一條鏈，並沿著這條鏈傳遞請求，直到有一個物件處理這個請求為止。

## 舉例
以公司接收到客戶需求為例子
- 如果這個需求**已經足夠明確，則交由程式設計師(Programmer)來處理**
- 如果這個需求**還不足以明確到可以交給程式設計師處理的話，則交給程式分析師(Programmer Analyst)來處理**
- 如果這個需求**非常不明確，則可能交由系統分析師(System Analyst)來處理**

## 類別圖
![Image](https://i.imgur.com/VP3OhTx.png)

## 值得注意什麼？
- 當有**多個物件 (處理需求的方式) 都有機會能處理相同請求時 (新來的需求)**，可以參考此模式。
- 具有順序性，**處理從小範圍到大範圍，特殊情形至一般情形來組織責任鏈**。
- 將**請求的發送者和接受者解耦**，發送者不需要知道實際接收者是誰並做什麼樣的處理，各個接收者也彼此獨立。
- **可以動態修改責任鏈**(調換優先處理順序)。
- 此模式**沒有保證請求一定要被處理**，端看設計者當初如何設計該責任鏈。

## 測試
```
$ npm run test ChainOfResponsibility
```

 ## 參考文章
 - [責任鏈模式 (Chain of Responsibility Pattern)](http://corrupt003-design-pattern.blogspot.com/2017/01/chain-of-responsibility-pattern.html)
