# Prototype - 原型模式
## 目的
「複製」一個已存在的實例並返還一個新實例，而這個新實例也就是所謂的「原型」，這個原型則可以再被客製(ex. 給值...)。

## 舉例
今天某一家感測廠生產了一個新型「感測裝置」，假設客戶要 200 個這樣的裝置，那感測廠勢必要排時間去生產這些裝置(耗時且耗資源)...
那有沒有可能從第 1 個生產出來的感測裝置，再依此規格複製 199 個出來!?(從現實角度來看，目前這個應該做不到XD...)

## 類別圖
![Image](https://i.imgur.com/ucPn0O1.png)

## 值得注意什麼？
- 有時候建立實例相當耗費資源(資料、硬體資源)，可以利用此 Pattern 來降低其消耗，由於是在記憶體中進行二進制資料拷貝，相比於建構式產生實例效能要好上許多。
- 碰到較複雜的實例生成，也可以增加程式可讀性(因為只要呼叫 clone 方法就能返還新實例)。
- 操作端也不用太清楚知道新實例如何被生成。
- 有分淺層及深層複製
   - 淺層複製(Shallow Copy)：實例內的實例**只會複製其參考(reference)**。
   - 深層複製(Deep Copy)：實例內的實例**也會需要 clone 方法來複製**。

## 測試
```
$ npm run test Prototype
```

## 參考文章
 - [原型模式 (Prototype Pattern)](http://corrupt003-design-pattern.blogspot.com/2017/02/prototype-pattern.html)
 - [\[Day 14\] 設定一次一勞永逸～原形模式(Prototype Pattern)](https://ithelp.ithome.com.tw/articles/10205989)
