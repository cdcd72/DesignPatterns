// 飲料 - Component
abstract class Beverage {

    protected description: string = 'unknown beverage...';

    /**
     * 取得描述
     * @returns string
     */
    getDescription(): string {
        return this.description;
    }

    /**
     * 花費
     * @returns number
     */
    abstract cost(): number;
}

// 奶茶 - ConcreteComponent
export class MilkTea extends Beverage {

    constructor() {
        super();
        this.description = 'Milk tea';
    }

    cost(): number {
        // 奶茶 45 元
        return 45;
    }
}

// 紅茶 - ConcreteComponent
export class BlackTea extends Beverage {

    constructor() {
        super();
        this.description = 'Black tea';
    }

    cost(): number {
        // 紅茶 20 元
        return 20;
    }
}

// 添加物 - Decorator
abstract class AdditiveDecorator extends Beverage {

    protected beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    // 希望含有什麼添加物一併顯示
    abstract getDescription(): string;
}

// 珍珠 - ConcreteDecorator
export class Tapioca extends AdditiveDecorator {

    getDescription(): string {
        return this.beverage.getDescription() + ' with tapioca';
    }

    cost(): number {
        // 加珍珠 + 5 元
        return this.beverage.cost() + 5;
    }
}

// 布丁 - ConcreteDecorator
export class Flan extends AdditiveDecorator {

    getDescription(): string {
        return this.beverage.getDescription() + ' with flan';
    }

    cost(): number {
        // 加布丁 + 15 元
        return this.beverage.cost() + 15;
    }
}