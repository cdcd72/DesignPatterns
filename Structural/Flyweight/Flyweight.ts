// Flyweight
abstract class Flyweight {

    protected sharedState: any;

    constructor(sharedState: any) {
        this.sharedState = sharedState;
    }

    /**
     * 操作
     * @param  {any} uniqueState
     * @returns void
     */
    abstract operation(uniqueState: any): void;
}

// 車輛類型 - ConcreteFlyweight
class CarType extends Flyweight {

    public operation(uniqueState: any): void {

        const s = JSON.stringify(this.sharedState);
        const u = JSON.stringify(uniqueState);
        console.log(`CarType: Displaying shared (${s}) and unique (${u}) state.`);
    }
}

// 車輛類型工廠 - FlyweightFactory
export class CarTypeFactory {

    private carTypes: {[key: string]: Flyweight} = <any>{};

    constructor(initialCarTypes: string[][]) {

        for (const state of initialCarTypes) {
            this.carTypes[this.getKey(state)] = new CarType(state);
        }
    }

    /**
     * 取得車輛類型
     * @param  {string[]} sharedState
     * @returns Flyweight
     */
    public getCarType(sharedState: string[]): Flyweight {

        const key = this.getKey(sharedState);

        if (!(key in this.carTypes)) {
            console.log('CarTypeFactory: Can\'t find a flyweight, creating new one.');
            this.carTypes[key] = new CarType(sharedState);
        } else {
            console.log('CarTypeFactory: Reusing existing flyweight.');
        }

        return this.carTypes[key];
    }

    /**
     * 列出所有車輛類型
     * @returns void
     */
    public listCarTypes(): void {

        const count = Object.keys(this.carTypes).length;

        console.log(`CarTypeFactory: I have ${count} flyweights:`);

        for (const key in this.carTypes) {
            console.log(key);
        }
    }

    /**
     * 取得鍵值
     * @param  {string[]} state
     * @returns string
     */
    private getKey(state: string[]): string {

        return state.join('_');
    }
}

// 警察
export class Police {

    /**
     * 將筆錄資料新增至資料庫
     * @param  {CarTypeFactory} carTypeFactory
     * @param  {string} plates
     * @param  {string} owner
     * @param  {string} brand
     * @param  {string} model
     * @param  {string} color
     * @returns void
     */
    addCarToPoliceDatabase (
        carTypeFactory: CarTypeFactory, plates: string, owner: string,
        brand: string, model: string, color: string
    ): void {

        console.log('Client: Adding a car to database.');
        const carType = carTypeFactory.getCarType([brand, model, color]);

        carType.operation([plates, owner]);
    }
}
