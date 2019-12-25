// 旅館
export class Hotel {
    
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    /**
     * 取得名稱
     * @returns string
     */
    getName(): string {
        return this.name;
    }

    // ...
}

// 餐廳
export class Restaurant {

    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    /**
     * 取得名稱
     * @returns string
     */
    getName(): string {
        return this.name;
    }

    // ...
}

// 假期 - Product
export class Vocation {

    private beginDate?: Date;
    private endDate?: Date;
    private hotel?: Hotel;
    private restaurant?: Restaurant;

    constructor(beginDate?: Date, endDate?: Date, hotel?: Hotel, restaurant?: Restaurant) {
        this.beginDate = beginDate;
        this.endDate = endDate;
        this.hotel = hotel;
        this.restaurant = restaurant;
    }

    /**
     * 取得開始日期
     * @returns Date
     */
    getBeginDate(): Date | undefined {
        return this.beginDate;
    }

    /**
     * 取得結束日期
     * @returns Date
     */
    getEndDate(): Date | undefined {
        return this.endDate;
    }

    /**
     * 取得旅館
     * @returns Hotel
     */
    getHotel(): Hotel | undefined {
        return this.hotel;
    }

    /**
     * 取得餐廳
     * @returns Restaurant
     */
    getRestaurant(): Restaurant | undefined {
        return this.restaurant;
    }
}

// 假期建造者 - Builder
export interface VocationBuilder {

    /**
     * 設定開始日期
     * @param  {Date} date?
     * @returns VocationBuilder
     */
    setBeginDate(date?: Date): VocationBuilder;

    /**
     * 設定結束日期
     * @param  {Date} date?
     * @returns VocationBuilder
     */
    setEndDate(date?: Date): VocationBuilder;

    /**
     * 設定住哪間旅館
     * @param  {Hotel} hotel?
     * @returns VocationBuilder
     */
    setHotel(hotel?: Hotel): VocationBuilder;

    /**
     * 設定吃哪間餐廳
     * @param  {Restaurant} restaurant?
     * @returns VocationBuilder
     */
    setRestaurant(restaurant?: Restaurant): VocationBuilder;

    /**
     * 讓使用者能取得假期物件
     * @returns Vocation
     */
    create(): Vocation;
}

// 七天假期建造者 - ConcreteBuilder
export class SevenDaysVocationBuilder implements VocationBuilder {
    
    // 每天經過毫秒數
    private PER_DAY_MILLISECONDS: number = 1000 * 60 * 60 * 24;

    private beginDate?: Date;
    private endDate?: Date;
    private hotel?: Hotel;
    private restaurant?: Restaurant;

    setBeginDate(date?: Date): VocationBuilder {
        this.beginDate = date;
        return this;
    }

    setEndDate(date?: Date): VocationBuilder {

        // ... 需滿足假期 7 天相關計算邏輯 ...
        if(this.beginDate !== undefined && date !== undefined) {
            if(this.diffDays(this.beginDate, date) === 7) {
                // 日期剛好差 7 天
                this.endDate = date;
            } else {
                // 日期可能小於或大於 7 天，則依據開始日期 + 7 天
                this.endDate = new Date(this.beginDate.getTime() + (7 * this.PER_DAY_MILLISECONDS))
            }
        }
        // ...

        return this;
    }

    setHotel(hotel?: Hotel): VocationBuilder {
        this.hotel = hotel;
        return this;
    }

    setRestaurant(restaurant?: Restaurant): VocationBuilder {
        this.restaurant = restaurant;
        return this;
    }

    create(): Vocation {

        // 若無設定結束日期，則依據開始日期 + 7 天
        if(this.beginDate !== undefined && this.endDate === undefined)
            this.endDate = new Date(this.beginDate.getTime() + (7 * this.PER_DAY_MILLISECONDS));

        return new Vocation(this.beginDate, this.endDate, this.hotel, this.restaurant);
    }

    /**
     * 計算差異天數
     * @param  {Date} date1
     * @param  {Date} date2
     * @returns number
     */
    private diffDays(date1: Date, date2: Date): number {
        return Math.abs(date1.getTime() - date2.getTime()) / this.PER_DAY_MILLISECONDS;
    }
}

// 旅行社 - Director
export class TravelAgency {

    private vocationBuilder: VocationBuilder;

    constructor(vocationBuilder: VocationBuilder) {
        this.vocationBuilder = vocationBuilder;
    }

    /**
     * 創造假期
     * @param  {Date} beginDate?
     * @param  {Date} endDate?
     * @param  {Hotel} hotel?
     * @param  {Restaurant} restaurant?
     * @returns Vocation
     */
    createVocation(beginDate?: Date, endDate?: Date, hotel?: Hotel, restaurant?: Restaurant): Vocation {
        return this.vocationBuilder
                .setBeginDate(beginDate) // 設定開始日期
                .setEndDate(endDate) // 設定結束日期
                .setHotel(hotel) // 設定旅館
                .setRestaurant(restaurant) // 設定餐廳
                .create();
    }
}
