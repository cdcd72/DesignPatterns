// 廠商可依此 API 實作客製化功能(易變動方法定義於此)
interface TvFunction {

    /**
     * 開
     * @returns void
     */
    on(): void;
    
    /**
     * 關
     * @returns void
     */
    off(): void;
    
    /**
     * 設定頻道
     * @param  {number} channel
     * @returns void
     */
    setChannel(channel: number): void;
    
    /**
     * 取得遙控器名稱
     * @returns string
     */
    getControlName(): string;
}

// Sony 遙控器
export class SonyControl implements TvFunction {

    private name: string = 'SonyControl';

    on(): void {
        console.log('On', '\"' + this.name + '\"');
    }

    off(): void {
        console.log('Off', '\"' + this.name + '\"');
    }

    setChannel(channel: number): void {
        console.log('SetChannel To ' + channel, '\"' + this.name + '\"');
    }

    getControlName(): string {
        return this.name;
    }
}

// Samsung 遙控器
export class SamsungControl implements TvFunction {

    private name: string = 'SamsungControl';

    on(): void {
        console.log('On', '\"' + this.name + '\"');
    }

    off(): void {
        console.log('Off', '\"' + this.name + '\"');
    }

    setChannel(channel: number): void {
        console.log('SetChannel To ' + channel, '\"' + this.name + '\"');
    }
    
    getControlName(): string {
        return this.name;
    }
}

// 抽象化遙控器
abstract class RemoteControl {

    tvFunction: TvFunction;

    // 只要替換其 TvFunction 就能操作其他家電視
    constructor(tvFunction: TvFunction) {
        this.tvFunction = tvFunction;
    }

    // 以下 on, off, setChannel, getTvName 方法均和 TvFunction 介面(各家電視功能)鬆綁
    public on(): void {
        this.tvFunction.on();
    } 

    public off(): void {
        this.tvFunction.off();
    }

    public setChannel(channel: number): void {
        this.tvFunction.setChannel(channel);
    }

    public getControlName(): string {
        return this.tvFunction.getControlName();
    }

    /**
     * 其他功能(交由底下繼承者實作)，甚至不影響其它原本各廠商各自的實作!!
     * @returns void
     */
    public abstract otherFunction(): void;
}

// 具體遙控器實作
export class ConcreteRemoteControl extends RemoteControl {

    public otherFunction(): void {
        console.log('Other Function Implementation...');
    }
}