// Flyweight
interface Flyweight {

    operation(uniqueState: any): void;
}

// ConcreteFlyweight
export class ConcreteFlyweight implements Flyweight {

    private sharedState: any;

    constructor(sharedState: any) {
        this.sharedState = sharedState;
    }

    public operation(uniqueState: any): void {
        const s = JSON.stringify(this.sharedState);
        const u = JSON.stringify(uniqueState);
        console.log(`Flyweight: Displaying shared (${s}) and unique (${u}) state.`);
    }
}

export class FlyweightFactory {

    private flyweights: {[key: string]: Flyweight} = <any>{};

    constructor(initialFlyweights: string[][]) {
        for (const state of initialFlyweights) {
            this.flyweights[this.getKey(state)] = new ConcreteFlyweight(state);
        }
    }

    public getFlyweight(sharedState: string[]): Flyweight {

        const key = this.getKey(sharedState);

        if (!(key in this.flyweights)) {
            console.log('FlyweightFactory: Can\'t find a flyweight, creating new one.');
            this.flyweights[key] = new ConcreteFlyweight(sharedState);
        } else {
            console.log('FlyweightFactory: Reusing existing flyweight.');
        }

        return this.flyweights[key];
    }

    public listFlyweights(): void {

        const count = Object.keys(this.flyweights).length;

        console.log(`\nFlyweightFactory: I have ${count} flyweights:`);

        for (const key in this.flyweights) {
            console.log(key);
        }
    }

    private getKey(state: string[]): string {
        return state.join('_');
    }
}

export class Police {

addCarToPoliceDatabase (
    ff: FlyweightFactory, plates: string, owner: string,
    brand: string, model: string, color: string,
): void {
    console.log('\nClient: Adding a car to database.');
    const flyweight = ff.getFlyweight([brand, model, color]);

    // The client code either stores or calculates extrinsic state and passes it
    // to the flyweight's methods.
    flyweight.operation([plates, owner]);
}

}
