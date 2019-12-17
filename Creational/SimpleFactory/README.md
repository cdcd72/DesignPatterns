# Simple Factory - 簡單工廠模式
## 目的
可以利用參數透過簡單工廠，產生需要的子類別物件，使用端不需要太在意物件如何生成。

## 舉例
若以**動物收容所**為例子，我可以**決定我是要認養貓還是狗**，但貓和狗**本質上均是動物**。

## 類別圖
![Image](https://i.imgur.com/6VuptaS.png)

## 值得注意什麼？
### 優點
1. 可參數控制想要實例化子類別物件
2. 實際產生子類別物件交給 AnimalShelter 工廠類別處理，降低實際操作端耦合。
3. 適用於操作端不太在意子類別物件如何去產生，而且種類越少複雜度越低。
### 缺點
1. 違反開放封閉原則(OCP) - 當我要在動物收容所新增動物時，就會異動到 AnimalShelter 工廠類別...
2. 當種類越多時，複雜度上升，導致該工廠類別其實不穩定...

## 測試
```
$ npm run test SimpleFactory
```
## 參考 github
 - [typescript-must-know by wahengchang](https://github.com/wahengchang/typescript-must-know)
 
## 參考文章
 - [Using Jest with TypeScript](https://basarat.gitbooks.io/typescript/docs/testing/jest.html)
 - [簡單工廠模式 SimpleFactory](https://skyyen999.gitbooks.io/-study-design-pattern-in-java/content/simpleFactory.html)
