# Proxy - 代理模式
## 目的
所有外部呼叫均需經過代理物件才可以和真實物件互動，也就是真實物件都會有一個替身。

## 舉例
以 Youtuber 為例子，網路聲量較高的 Youtuber 時常有機會接到許多工商，但決定是否接受不一定是由 Youtuber 本人決定！
(可能是工作室、經紀公司決定後才往下派給 Youtuber 去執行，甚至是會衡量工商費用多寡...)

## 類別圖
![Image](https://i.imgur.com/Vggx6Nw.png)

## 值得注意什麼？
- 專注在「**控制物件的存取**」上
- 實際目標及代理人均**繼承同一介面**
- 代理人會帶有實際目標的參考
- **外部呼叫均需經過代理人**才能和實際目標互動
- 實際目標常是**遠端物件**或者是該**物件建立成本高**(比如我要載入一張圖至某一物件，當載入完畢才能與此物件互動...)

## 測試
```
$ npm run test Proxy
```

## 參考文章
 - [Software design pattern](https://en.wikipedia.org/wiki/Software_design_pattern)
 - [代理人模式 (Proxy Pattern)](http://corrupt003-design-pattern.blogspot.com/2016/10/proxy-pattern.html)
 - [\[Design Pattern\] 代理模式 (Proxy Pattern)](http://glj8989332.blogspot.com/2018/04/design-pattern-proxy-pattern.html)