// 抽象化演算法 - AbstractClass
abstract class Algorithm {

    /**
     * 執行這些步驟 - templateMethod
     * @returns void
     */
    public executeSteps(): void {
        this.baseOperation1();
        this.requiredOperation1();
        this.baseOperation2();
        this.requiredOperation2();
        this.baseOperation3();
        if(this.customWantsHook())
            this.hookOperation();
    }

    /**
     * 基本操作 1
     * @returns void
     */
    baseOperation1(): void {
        console.log('Execute baseOperation1...');
    }

    /**
     * 基本操作 2
     * @returns void
     */
    baseOperation2(): void {
        console.log('Execute baseOperation2...');
    }

    /**
     * 基本操作 3
     * @returns void
     */
    baseOperation3(): void {
        console.log('Execute baseOperation3...');
    }

    /**
     * 必要操作 1(子類別需要實作)
     * @returns void
     */
    protected abstract requiredOperation1(): void;

    /**
     * 必要操作 2(子類別需要實作)
     * @returns void
     */
    protected abstract requiredOperation2(): void;

    /**
     * 子類別可以決定要不要使用掛鉤操作，但實際上是父類別呼叫子類別 hook 方法哦
     * @returns boolean
     */
    protected customWantsHook(): boolean { 
        return false;
    }

    /**
     * 掛鉤操作
     * @returns void
     */
    protected hookOperation(): void { }
}

// 某一演算法(含掛鉤操作) - SubClass
export class SomeAlgorithm extends Algorithm {

    private withHookOperation: boolean;

    constructor(withHookOperation: boolean = false) {
        super();
        this.withHookOperation = withHookOperation;
    }

    requiredOperation1(): void {
        console.log('Execute requiredOperation1...');
    }

    requiredOperation2(): void {
        console.log('Execute requiredOperation2...');
    }

    customWantsHook(): boolean {
        // Some rule ...
        return this.withHookOperation;
    }

    hookOperation(): void { 
        console.log('Execute hookOperation...');
    }
}