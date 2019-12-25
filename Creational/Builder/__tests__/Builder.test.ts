import { VocationBuilder } from '../Builder';
import { Hotel, Restaurant, Vocation, SevenDaysVocationBuilder, TravelAgency } from '../Builder';

describe('Build vocation object scenario', () => {

  // ...
  // 簡化：客戶端直接透過 Builder 決定步驟來取得假期物件(知道經過哪些步驟，但不會知道物件怎麼建造的)
  // ...

  // 取得假期物件(簡化情況1)
  it('Get vocation object simple case 1...', () => {

    // 假期物件建造者
    const vocationBuilder: VocationBuilder = new SevenDaysVocationBuilder();

    // 開始日期
    const beginDate: Date = new Date('2019-12-23');

    // 結束日期
    const endDate: Date = new Date('2019-12-30');

    // 旅館
    const hotel: Hotel = new Hotel('Some Hotel');

    // 假期物件(搭配使用 Fluent interface)
    const vocation: Vocation = vocationBuilder
                               .setBeginDate(beginDate) // 設定開始日期
                               .setEndDate(endDate) // 設定結束日期
                               .setHotel(hotel) // 設定旅館
                               .create();

    expect(vocation.getBeginDate()?.getTime()).toBe(beginDate.getTime());
    expect(vocation.getEndDate()?.getTime()).toBe(endDate.getTime());
    expect(vocation.getHotel()?.getName()).toBe('Some Hotel');
    expect(vocation.getRestaurant()).toBe(undefined);
  });

  // 取得假期物件(簡化情況2)
  it('Get vocation object simple case 2...', () => {

    // 假期物件建造者
    const vocationBuilder: VocationBuilder = new SevenDaysVocationBuilder();

    // 開始日期
    const beginDate: Date = new Date('2019-12-23');

    // 結束日期
    const endDate: Date = new Date('2019-12-30');

    // 旅館
    const hotel: Hotel = new Hotel('Some Hotel');

    // 餐廳
    const restaurant: Restaurant = new Restaurant('Some Restaurant');

    // 假期物件(搭配使用 Fluent interface)，沒有特別設定結束日期!!!
    const vocation: Vocation = vocationBuilder
                               .setBeginDate(beginDate) // 設定開始日期
                               .setHotel(hotel) // 設定旅館
                               .setRestaurant(restaurant) // 設定餐廳
                               .create();

    expect(vocation.getBeginDate()?.getTime()).toBe(beginDate.getTime());
    expect(vocation.getEndDate()?.getTime()).toBe(endDate.getTime());
    expect(vocation.getHotel()?.getName()).toBe('Some Hotel');
    expect(vocation.getRestaurant()?.getName()).toBe('Some Restaurant');
  });

  // ...
  // 嚴謹：客戶端透過 Director 決定的步驟來取得假期物件(不用知道經過哪些步驟，但不會知道物件怎麼建造的)
  // ...

  // 取得假期物件(嚴謹情況1)
  it('Get vocation object strict case 1...', () => {

    // 假期物件建造者
    const vocationBuilder: VocationBuilder = new SevenDaysVocationBuilder();

    // 開始日期
    const beginDate: Date = new Date('2019-12-23');

    // 結束日期
    const endDate: Date = new Date('2019-12-30');

    // 旅館
    const hotel: Hotel = new Hotel('Some Hotel');

    // 假期物件
    const vocation: Vocation = 
        new TravelAgency(vocationBuilder).createVocation(beginDate, endDate, hotel);

    expect(vocation.getBeginDate()?.getTime()).toBe(beginDate.getTime());
    expect(vocation.getEndDate()?.getTime()).toBe(endDate.getTime());
    expect(vocation.getHotel()?.getName()).toBe('Some Hotel');
  });

  // 取得假期物件(嚴謹情況2)
  it('Get vocation object strict case 2...', () => {

    // 假期物件建造者
    const vocationBuilder: VocationBuilder = new SevenDaysVocationBuilder();

    // 開始日期
    const beginDate: Date = new Date('2019-12-23');

    // 結束日期
    const endDate: Date = new Date('2019-12-30');

    // 旅館
    const hotel: Hotel = new Hotel('Some Hotel');

    // 餐廳
    const restaurant: Restaurant = new Restaurant('Some Restaurant');

    // 假期物件，沒有特別設定結束日期!!!
    const vocation: Vocation = 
        new TravelAgency(vocationBuilder).createVocation(beginDate, undefined, hotel, restaurant);

    expect(vocation.getBeginDate()?.getTime()).toBe(beginDate.getTime());
    expect(vocation.getEndDate()?.getTime()).toBe(endDate.getTime());
    expect(vocation.getHotel()?.getName()).toBe('Some Hotel');
    expect(vocation.getRestaurant()?.getName()).toBe('Some Restaurant');
  });
});