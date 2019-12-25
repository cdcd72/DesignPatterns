# Memento - 備忘錄模式
## 目的
提供物件回到之前的狀態，簡單說就是備份 (存檔) 的機制。

## 舉例
以角色扮演遊戲為例子，創造一個角色來玩這個遊戲，基本上會有存檔機制，當想要再玩時就能利用存檔回到之前的進度，當然這份記錄也可以提供給其他人再利用。  

(其他例子)  
文書編輯器(Editor)的「上一步」功能。

## 類別圖
![Image](uml/example.jpg)

## 值得注意什麼？
- 職責上分為 Originator, Memento, Caretaker(使類別權責單一化且好維護)。
   - Originator：保留內部狀態的物件(ex. 遊戲角色狀態、文書編輯器文字...)
   - Memento：保留 Originator 內部狀態的物件(ex. 存檔資料...)
   - Caretaker：管理 Memento 的物件(ex. 存檔資料管理...)
- 儲存物件狀態及其還原狀態機制。

## 測試
```
$ npm run test Memento
```

 ## 參考文章
 - [備忘錄模式 (Memento Pattern)](http://corrupt003-design-pattern.blogspot.com/2017/02/memento-pattern.html)
