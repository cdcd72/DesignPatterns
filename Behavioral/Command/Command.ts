// 燈俱 - Receiver
export class Light {

    private status: boolean = false;

    on(): void {
        this.status = true;
    }

    off(): void {
        this.status = false;
    }

    getStatus(): boolean {
        return this.status;
    }
}

// 電視 - Receiver
export class Television {

    private status: boolean = false;

    turnOn(): void {
        this.status = true;
    }

    turnOff(): void {
        this.status = false;
    }

    getStatus(): boolean {
        return this.status;
    }
} 

// 命令介面 - Command
interface Command {

    /**
     * 執行
     * @returns void
     */
    execute(): void;

    /**
     * 復原
     * @returns void
     */
    undo(): void;
}

// 開燈命令 - ConcreteCommand
export class LightOn implements Command {

    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.on();
    }

    undo(): void {
        this.light.off();
    }
}

// 關燈命令 - ConcreteCommand
export class LightOff implements Command {

    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.off();
    }

    undo(): void {
        this.light.on();
    }
}

// 開電視命令 - ConcreteCommand
export class TelevisionOn implements Command {

    private television: Television;

    constructor(television: Television) {
        this.television = television;
    }

    execute(): void {
        this.television.turnOn();
    }

    undo(): void {
        this.television.turnOff();
    }
}

// 關電視命令 - ConcreteCommand
export class TelevisionOff implements Command {

    private television: Television;

    constructor(television: Television) {
        this.television = television;
    }

    execute(): void {
        this.television.turnOff();
    }

    undo(): void {
        this.television.turnOn();
    }
}

// 空命令 - ConcreteCommand
class NoCommand implements Command {

    execute(): void {
        // 不處理任何事
    }

    undo(): void {
        // 不處理任何事
    }
}

// 遙控器 - Invoker
export class RemoteControl {

    private onCommands: Array<Command> = [];
    private offCommands: Array<Command> = [];

    private undoCommand: Command;

    constructor() {

        // 空命令
        const noCommand = new NoCommand();
        
        // 假設只有 2 個家電要控制(燈俱及電視)
        for (let i = 0; i < 2; i++) {
            this.onCommands[i] = noCommand;
            this.offCommands[i] = noCommand;
        }

        // 先將復原命令設為空命令
        this.undoCommand = noCommand;
    }

    /**
     * 設定命令
     * @param  {number} slot
     * @param  {Command} onCommand
     * @param  {Command} offCommand
     */
    setCommand(slot: number, onCommand: Command, offCommand: Command) {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    /**
     * 開
     * @param  {number} slot
     */
    onPressed(slot: number) {
        this.onCommands[slot].execute();
        // 執行完並記錄當前步驟
        this.undoCommand = this.onCommands[slot];
    }

    /**
     * 關
     * @param  {number} slot
     */
    offPressed(slot: number) {
        this.offCommands[slot].execute();
        // 執行完並記錄當前步驟
        this.undoCommand = this.offCommands[slot];
    }

    /**
     * 復原
     */
    undoPressed(): void {
        this.undoCommand.undo();
    }
}