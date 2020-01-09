// 中介者介面 - Mediator
interface Mediator {

    /**
     * 通知
     * @param  {object} sender
     * @param  {string} instruction
     * @param  {string} message
     * @returns void
     */
    notify(sender: object, instruction: string, message: string): void;
}

// 機場塔台 - ConcreteMediator
export class AirportTower implements Mediator {

    private airliner: Airliner;
    private helicopter: Helicopter;
    private privateJet: PrivateJet;

    constructor(airliner: Airliner, helicopter: Helicopter, privateJet: PrivateJet) {

        // 客機
        this.airliner = airliner;
        this.airliner.setMediator(this);

        // 直升機
        this.helicopter = helicopter;
        this.helicopter.setMediator(this);

        // 私人飛機
        this.privateJet = privateJet;
        this.privateJet.setMediator(this);
    }

    public notify(sender: object, instruction: string, message: string = ''): void {

        // A 指令 => 需通知直升機、私人飛機
        if (instruction === 'A') {
            console.log('Airport tower reacts on A and triggers following operations:');
            this.helicopter.receiveMessage(message);
            this.privateJet.receiveMessage(message);
        }

        // B 指令 => 需通知客機、私人飛機
        if (instruction === 'B') {
            console.log('Airport tower reacts on B and triggers following operations:');
            this.airliner.receiveMessage(message);
            this.privateJet.receiveMessage(message);
        }

        // C 指令 => 需通知客機、直升機
        if (instruction === 'C') {
            console.log('Airport tower reacts on C and triggers following operations:');
            this.airliner.receiveMessage(message);
            this.helicopter.receiveMessage(message);
        }
    }
}

// 抽象化飛機 - Colleague
abstract class Aircraft {

    protected mediator?: Mediator;

    constructor(mediator?: Mediator) {
        this.mediator = mediator;
    }

    /**
     * 設定中介者
     * @param  {Mediator} mediator
     * @returns void
     */
    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}

// 客機
export class Airliner extends Aircraft {

    /**
     * 送出指令 A
     * @returns void
     */
    public sendInstructionA(): void {
        console.log('Airliner Send A Instruction.');
        this.mediator?.notify(this, 'A', 'Airliner will land at A area, please avoid this area.');
    }

    /**
     * 接收訊息
     * @param  {string} message
     * @returns void
     */
    public receiveMessage(message: string): void {
        console.log('Airliner received message: ' + message);
    }
}

// 直升機
export class Helicopter extends Aircraft {
    
    /**
     * 送出指令 B
     * @returns void
     */
    public sendInstructionB(): void {
        console.log('Helicopter Send B Instruction.');
        this.mediator?.notify(this, 'B', 'Helicopter will land at B area, please avoid this area.');
    }

    /**
     * 接收訊息
     * @param  {string} message
     * @returns void
     */
    public receiveMessage(message: string): void {
        console.log('Helicopter received message: ' + message);
    }
}

// 私人飛機
export class PrivateJet extends Aircraft {
    
    /**
     * 送出指令 C
     * @returns void
     */
    public sendInstructionC(): void {
        console.log('PrivateJet Send C Instruction.');
        this.mediator?.notify(this, 'C', 'PrivateJet will land at C area, please avoid this area.');
    }

    /**
     * 接收訊息
     * @param  {string} message
     * @returns void
     */
    public receiveMessage(message: string): void {
        console.log('PrivateJet received message: ' + message);
    }
}