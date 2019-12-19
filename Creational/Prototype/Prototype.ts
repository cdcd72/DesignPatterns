// Prototype 
export abstract class Sensor {
    
    /**
     * 複製
     * @returns Sensor
     */
    abstract clone(): Sensor;
}

// Concrete Prototype
export class ConcreteSensor extends Sensor {

    private productNo: number = 0;

    /**
     * 取得產品編號
     * @returns number
     */
    getProductNo(): number {
        return this.productNo;
    }

    /**
     * 設定產品編號
     * @param  {number} productNo
     */
    setProductNo(productNo: number) {
        this.productNo = productNo;
    }

    clone(): Sensor {
        return Object.create(ConcreteSensor.prototype || null);
    }
}

// Client
export class SensorMachine {

    private sensor: Sensor;

    constructor(sensor: Sensor) {
        this.sensor = sensor;
    }

    /**
     * 複製感測裝置
     * @returns Sensor
     */
    cloneSensor(): Sensor {
        return this.sensor.clone();
    }
}