// 雜誌商介面(被觀察者)
interface MagazinePublisher {

    /**
     * 訂閱
     * @param  {Observer} customer
     * @returns void
     */
    subscribed(customer: Observer): void;

    /**
     * 取消訂閱
     * @param  {Observer} customer
     * @returns void
     */
    unsubscribed(customer: Observer): void;
    
    /**
     * 通知
     * @returns void
     */
    notify(): void;
}

// 客戶介面(觀察者)
interface Observer {

    /**
     * 更新
     * @param  {Object} arg
     * @returns void
     */
    update(arg: Object): void;
}

// 客戶(抽象化)
abstract class AbstractObserver implements Observer {

    // unique id
    readonly uuid: string;

    constructor() {
        // set unique id
        this.uuid = UUID.get();
    }
    
    abstract update(arg: Object): void;
}

// UUID
class UUID {

    /**
     * 取得UUID
     * @returns string
     */
    static get(): string {

        var dt = new Date().getTime();

        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });

        return uuid;
    }
}

// 雜誌商屬性
interface MagazinePublisherProps {
    broadcastMessage: string;
    subscribers: Array<AbstractObserver>;
}

// 傳遞給觀察者資料轉換物件(Data Transfer Object)
interface DeliverDataDto {
    message: string;
}

// FastLearnABC 雜誌商
export class FastLearnABC implements MagazinePublisher {

    protected props: MagazinePublisherProps;

    constructor(props?: MagazinePublisherProps) {
        this.props = props || { broadcastMessage: "", subscribers: [] };
    }

    /**
     * 設定廣播訊息
     * @param  {string} message
     * @returns void
     */
    setBroadcastMessage(message: string): void {
        this.props.broadcastMessage = message;
    }

    /**
     * 訂閱
     * @param  {AbstractObserver} customer
     * @returns void
     */
    subscribed(customer: AbstractObserver): void {
        this.props.subscribers.push(customer);
    }

    /**
     * 取消訂閱
     * @param  {AbstractObserver} customer
     * @returns void
     */
    unsubscribed(customer: AbstractObserver): void {

        var index: number = -1;

        // 判斷已存在 subscriber 位置 
        this.props.subscribers.forEach((existsCustomer, i) => {
            if(existsCustomer.uuid === customer.uuid)
                index = i;
        });

        // 找不到已存在訂閱者丟出例外
        if(index === -1)
            throw new Error('Subscriber not found!');

        // 移除訂閱者
        this.props.subscribers.splice(index, 1);
    }

    /**
     * 通知
     * @returns void
     */
    notify(): void {
        this.props.subscribers.forEach(subscriber => {
            const dto = {
                message: this.props.broadcastMessage
            };
            subscriber.update(dto);
        });
    }
}

// 客戶
export class Customer extends AbstractObserver {

    private newMessage: string;
    
    constructor() {
        super();
        this.newMessage = '';
    }

    /**
     * 取得訊息
     * @returns string
     */
    getMessage(): string {
        return this.newMessage;
    }

    /**
     * 更新資料
     * @param  {Object} arg
     * @returns void
     */
    update(arg: Object): void {
        if(this.isDeliverDataDto(arg)) {
            const data = arg as DeliverDataDto;
            this.newMessage = data.message;
        }
    }

    /**
     * 確認是否可轉成 DeliverDataDto 物件?
     * @param  {Object} dto
     * @returns boolean
     */
    private isDeliverDataDto(dto: Object): dto is DeliverDataDto {
        return (dto as DeliverDataDto) !== undefined;
    }
}