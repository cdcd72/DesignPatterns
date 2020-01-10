// 建築物介面 - Element(Component)
interface Building {

    /**
     * 取得編號
     * @returns number
     */
    getId(): number;

    /**
     * 取得細節
     * @returns string
     */
    getDetails(): string;

    /**
     * 接受(藉由訪問者來增加行為)
     * @param  {Visitor} visitor
     * @returns void
     */
    accept(visitor: Visitor): void;
}

// 住宅 - ConcreteElement(Leaf)
export class ResidentialBuilding implements Building {

    private id: number;
    private name: string;
    private position: string;

    constructor(id: number, name: string, position: string) {
        this.id = id;
        this.name = name;
        this.position = position;
    }

    getId(): number {
        return this.id;
    }

    getDetails(): string {
        return this.id + ', ' + this.name + ', ' + this.position;
    }

    // ...
    // 專注於自己的行為，可定義於此處...
    doSomethingA(): void { 
        console.log('Residential building do something...');
    }
    // ...

    accept(visitor: Visitor): void {
        visitor.visitResidentialBuilding(this);
    }
}

// 銀行 - ConcreteElement(Leaf)
export class Bank implements Building {
    
    private id: number;
    private name: string;
    private position: string;

    constructor(id: number, name: string, position: string) {
        this.id = id;
        this.name = name;
        this.position = position;
    }

    getId(): number {
        return this.id;
    }

    getDetails(): string {
        return this.id + ', ' + this.name + ', ' + this.position;
    }

    // ...
    // 專注於自己的行為，可定義於此處...
    doSomethingB(): void { 
        console.log('Bank do something...');
    }
    // ...

    accept(visitor: Visitor): void {
        visitor.visitBank(this);
    }
}

// 咖啡店 - ConcreteElement(Leaf)
export class CoffeeShop implements Building {
    
    private id: number;
    private name: string;
    private position: string;

    constructor(id: number, name: string, position: string) {
        this.id = id;
        this.name = name;
        this.position = position;
    }

    getId(): number {
        return this.id;
    }

    getDetails(): string {
        return this.id + ', ' + this.name + ', ' + this.position;
    }

    // ...
    // 專注於自己的行為，可定義於此處...
    doSomethingC(): void { 
        console.log('Coffee shop do something...');
    }
    // ...

    accept(visitor: Visitor): void {
        visitor.visitCoffeeShop(this);
    }
}

// 建築物們 - ConcreteElement(Composite)
export class Buildings implements Building {

    private buildings: Array<Building> = [];

    /**
     * 加入建築物
     * @param  {Building} building
     */
    addBuilding(building: Building) {
        this.buildings.push(building);
    }

    /**
     * 刪除建築物
     * @param  {Building} building
     */
    removeBuilding(building: Building) {

        var index: number = -1;

        // 判斷已存在 building 位置 
        this.buildings.forEach((existsBuilding, i) => {
            if(existsBuilding.getId() === building.getId())
                index = i;
        });

        // 找不到已存在建築物則丟出例外
        if(index === -1)
            throw new Error('Building not found!');

        // 移除建築物
        this.buildings.splice(index, 1);
    }

    /**
     * 取得底下建築物
     * @returns Array
     */
    getBuildings(): Array<Building> {
        return this.buildings;
    }

    getId(): number {
        // 傳出 -1 代表我並不在意 Composite 裡的 getId 方法，實際上也可以換成丟出例外....
        return -1;
    }

    getDetails(): string {

        const details: Array<string> = [];

        this.buildings.forEach(function(member){
            details.push(member.getDetails());
        });

        return details.join('\n');
    }

    accept(visitor: Visitor): void {

        this.buildings.forEach(function(member){
            member.accept(visitor);
        });
    }
}

// 訪問者介面 - Visitor
interface Visitor {

    /**
     * 拜訪住宅區
     * @param  {ResidentialBuilding} residentialBuilding
     * @returns void
     */
    visitResidentialBuilding(residentialBuilding: ResidentialBuilding): void;
    
    /**
     * 拜訪銀行
     * @param  {Bank} bank
     * @returns void
     */
    visitBank(bank: Bank): void;

    /**
     * 拜訪咖啡店
     * @param  {CoffeeShop} coffeeShop
     * @returns void
     */
    visitCoffeeShop(coffeeShop: CoffeeShop): void;
}

// 保單匯出訪問者 - ConcreteVisitor
export class InsurancePolicyExportVisitor implements Visitor {

    visitResidentialBuilding(residentialBuilding: ResidentialBuilding): void {

        // 取得細節
        console.log(residentialBuilding.getDetails());

        // 做一些事，以利後續能匯出符合客戶的保單...
        residentialBuilding.doSomethingA();

        // ...
        // 匯出邏輯寫在這...
        // ...
    }

    visitBank(bank: Bank): void {

        // 取得細節
        console.log(bank.getDetails());

        // 做一些事，以利後續能匯出符合客戶的保單...
        bank.doSomethingB();

        // ...
        // 匯出邏輯寫在這...
        // ...
    }

    visitCoffeeShop(coffeeShop: CoffeeShop): void {

        // 取得細節
        console.log(coffeeShop.getDetails());

        // 做一些事，以利後續能匯出符合客戶的保單...
        coffeeShop.doSomethingC();

        // ...
        // 匯出邏輯寫在這...
        // ...
    }
}