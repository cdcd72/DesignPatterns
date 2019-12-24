// 牆上插座 - Adaptee
interface WallSocket {

    /**
     * 放電
     * @returns number
     */
    discharge(): number;
}

// 具體 220 伏特插座
export class Concrete220vWallSocket implements WallSocket {

    discharge(): number {
        return 220;
    }
}

// 插頭 - Target
export interface Plug {

    /**
     * 充電
     * @returns number
     */
    charge(): number;
}

// 具體 110 伏特插頭
export class Concrete110vPlug implements Plug {

    charge(): number {
        return 110;
    }
}

// 電壓轉接器 - Adapter
export class VoltageAdapter implements Plug {

    private wallSocket: WallSocket;

    constructor(wallSocket: WallSocket) {
        this.wallSocket = wallSocket;
    }

    charge(): number {
        let voltage = this.wallSocket.discharge();
        // ... 經過降壓邏輯 ...
        if(voltage === 220)
            voltage = 110;
        // ...
        return voltage;
    }
}