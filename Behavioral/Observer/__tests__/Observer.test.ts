import { FastLearnABC, Customer } from '../Observer';

describe('Customer get new information scenario', () => {

  // 所有訂閱者應該都要取得新訊息
  it('All subscribed customer should be get new information', () => {
    const student = new Customer();
    const officeWorker = new Customer();
    const fastLearnABC = new FastLearnABC();
    // 客戶已訂閱雜誌
    fastLearnABC.subscribed(student);
    fastLearnABC.subscribed(officeWorker);
    // 雜誌商設定廣播訊息
    const broadcastMessage = '本期新雜誌已於各大門市及便利超商販售嚕！趕緊去購買吧～';
    fastLearnABC.setBroadcastMessage(broadcastMessage);
    // 通知各個客戶
    fastLearnABC.notify();
    // 客戶接收到新訊息
    expect(student.getMessage()).toBe(broadcastMessage);
    expect(officeWorker.getMessage()).toBe(broadcastMessage);
  });

  // 取消訂閱者不應該再取得新訊息
  it('All unsubscribed customer shouldn\'t be get new information', () => {
    const student = new Customer();
    const officeWorker = new Customer();
    const fastLearnABC = new FastLearnABC();
    // 客戶已訂閱雜誌
    fastLearnABC.subscribed(student);
    fastLearnABC.subscribed(officeWorker);
    // 雜誌商設定廣播訊息
    var broadcastMessage = '本期新雜誌已於各大門市及便利超商販售嚕！趕緊去購買吧～';
    fastLearnABC.setBroadcastMessage(broadcastMessage);
    // 通知各個客戶
    fastLearnABC.notify();
    // 客戶接收到新訊息
    expect(student.getMessage()).toBe(broadcastMessage);
    expect(officeWorker.getMessage()).toBe(broadcastMessage);
    // ...
    // 學生臨時取消了訂閱
    fastLearnABC.unsubscribed(student);
    // 雜誌商再次設定廣播訊息
    broadcastMessage = '同時間我們也出版了新刊物！有需要者可以參考參考哦～';
    fastLearnABC.setBroadcastMessage(broadcastMessage);
    // 再次通知各個客戶
    fastLearnABC.notify();
    // 客戶接收到新訊息
    expect(student.getMessage()).not.toBe(broadcastMessage);
    expect(officeWorker.getMessage()).toBe(broadcastMessage);
  });
});

// 訂閱者機制
describe('Subscriber mechanism', () => {
  it('Subscriber not found. because this customer never subscribed!', () => {
    const student = new Customer();
    const fastLearnABC = new FastLearnABC(); 
    try {
      // 學生臨時取消了訂閱(但是學生根本沒訂閱)
      fastLearnABC.unsubscribed(student);
    } catch (error: any) {
      expect(error.message).toBe('Subscriber not found!');
    }
  });
});