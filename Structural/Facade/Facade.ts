class PayCalculator {

    private employee: Employee;

    // 建構子
    constructor(employee: Employee) {
        this.employee = employee;
    }

    /**
     * 取得已計算薪資
     * @returns number
     */
    public getCalculatedPay(): number {
        return this.employee.getBasePay() * this.getBaseCoefficient();
    }

    /**
     * 取得基本係數
     * @returns number
     */
    private getBaseCoefficient(): number {
        // Some Rule...
        return 1.2;
    }
}

class PerformanceEvaluationCalculator {

    private employee: Employee;

    // 建構子
    constructor(employee: Employee) {
        this.employee = employee;
    }

    /**
     * 取得特定比例
     * @returns number
     */
    public getRate(): number {
        // Some Rule...
        return this.employee.getBaseRate() + 0.1;
    }
}

// Facade Interface
interface Service {
    getCalculatedPay(): number;
    getBounsPay(): number;
}

// Facade Implement
class FacadeService implements Service {

    payCalculator: PayCalculator;
    performanceEvaluationCalculator: PerformanceEvaluationCalculator;

    constructor(employee: Employee) {
        this.payCalculator = new PayCalculator(employee);
        this.performanceEvaluationCalculator = new PerformanceEvaluationCalculator(employee);
    }

    /**
     * 取得薪資
     * @returns number
     */
    public getCalculatedPay(): number {
        return this.payCalculator.getCalculatedPay();
    }

    /**
     * 取得額外薪資
     * @returns number
     */
    public getBounsPay(): number {
        return 10000 * this.performanceEvaluationCalculator.getRate();
    }
}

export class Employee {

    // 基本薪資
    private basePay = 23800;

    // 基本比例
    private baseRate = 1.1;

    /**
     * 取得基本薪資
     * @returns number
     */
    public getBasePay(): number {
        return this.basePay;
    }

    /**
     * 取得基本比例
     * @returns number
     */
    public getBaseRate(): number {
        return this.baseRate;
    }
}

// OriginalApplication 和 PayCalculator, PerformanceEvaluationCalculator 已有依賴關係(耦合嚴重)
export class OriginalApplication {

    payCalculator: PayCalculator;
    performanceEvaluationCalculator: PerformanceEvaluationCalculator;

    constructor(employee: Employee) {
        this.payCalculator = new PayCalculator(employee);
        this.performanceEvaluationCalculator = new PerformanceEvaluationCalculator(employee);
    }

    /**
     * 取得年終獎金
     * @returns number
     */
    public getYearEndBonus(): number {
        return this.payCalculator.getCalculatedPay() + (10000 * this.performanceEvaluationCalculator.getRate());
    }
}

// FacadeApplication 已解除 PayCalculator, PerformanceEvaluationCalculator 依賴關係(鬆耦合)
export class FacadeApplication {

    service: Service;

    constructor(employee: Employee) {
        this.service = new FacadeService(employee);
    }

    /**
     * 取得年終獎金
     * @returns number
     */
    public getYearEndBonus(): number {
        return this.service.getCalculatedPay() + this.service.getBounsPay();
    }
}