import { CarTypeFactory, Police } from '../Flyweight';

describe('Police station scenario...', () => {

  // 做筆錄...
  it('Take a statement..', () => {

    // 初始化部分車輛類型
    const carTypeFactory = new CarTypeFactory([
        ['Chevrolet', 'Camaro2018', 'pink'], // flyweight
        ['Mercedes Benz', 'C300', 'black'], // flyweight
        ['Mercedes Benz', 'C500', 'red'], // flyweight
        ['BMW', 'M5', 'red'], // flyweight
        ['BMW', 'X6', 'white'], // flyweight
        // ...
    ]);
    
    // 列出所有車輛類型
    carTypeFactory.listCarTypes();

    // 警察
    const police = new Police();

    // 加入車輛狀態至警察資料庫
    police.addCarToPoliceDatabase(carTypeFactory, 'CL234IR', 'James Doe', 'BMW', 'M5', 'red'); // 已有已知車輛類型狀態，故拿取已存在狀態，不再特別新增車輛類型狀態
    police.addCarToPoliceDatabase(carTypeFactory, 'CL567IR', 'James Doe', 'BMW', 'X1', 'red'); // 碰到新的車輛類型狀態，則需新增一筆記錄

    // 列出所有車輛類型
    carTypeFactory.listCarTypes();
  });
});