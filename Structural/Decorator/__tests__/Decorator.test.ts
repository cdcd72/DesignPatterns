import { MilkTea, BlackTea, Tapioca, Flan } from '../Decorator';

describe('Beverage Shop Scenario', () => {
  // 請給我一杯珍珠奶茶
  it('Please give me one bubble tea...', () => {
    let milkTeaWithTapioca = new Tapioca(new MilkTea());
    console.log(milkTeaWithTapioca.getDescription());
    // 奶茶 45 元 + 珍珠 5 元 = 50 元
    expect(milkTeaWithTapioca.cost()).toBe(50);
  });
  // 請給我一杯珍珠紅茶再加布丁
  it('Please give me one black tea with tapioca and flan...', () => {
    let blackTeaWithTapiocaAndFlan = new Flan(new Tapioca(new BlackTea()));
    console.log(blackTeaWithTapiocaAndFlan.getDescription());
    // 紅茶 20 元 + 珍珠 5 元 + 布丁 15 元 = 40 元
    expect(blackTeaWithTapiocaAndFlan.cost()).toBe(40);
  });
});