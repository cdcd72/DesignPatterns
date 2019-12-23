// 客戶需求
export class Require {

    private handler: string;

    constructor(handler?: string) {
        this.handler = handler ? handler : 'None';
    }

    /**
     * 取得處理人員
     * @returns string
     */
    getHandler(): string {
        return this.handler;
    }
}

// 需求處理者
abstract class RequireHandler {

    private requireHandler: RequireHandler | undefined;

    constructor(requireHandler?: RequireHandler) {
        this.requireHandler = requireHandler ? requireHandler : undefined;
    }

    /**
     * 給下一個可能可以處理的 Handler...
     * @param  {Require} require
     * @returns string
     */
    toNext(require: Require): string {

        if(this.requireHandler != undefined && this.requireHandler != null) {
            return this.requireHandler.handleRequire(require);
        } else {
            // 若無後續 Handler 可處理情況...
            // 通常這邊會寫最一般化的處理方式...
            return require.getHandler();
        }
    }

    /**
     * 處理需求
     * @param  {Require} require
     * @returns string
     */
    public abstract handleRequire(require: Require): string;
}

// 程式設計師
export class Programmer extends RequireHandler {

    public handleRequire(require: Require): string {

        const handler: string = 'Programmer';

        if(require.getHandler() === handler)
            return handler;
        else
            return this.toNext(require);
    }
}

// 程式分析師
export class ProgrammerAnalyst extends RequireHandler {

    public handleRequire(require: Require): string {

        const handler: string = 'ProgrammerAnalyst';

        if(require.getHandler() === handler)
            return handler;
        else
            return this.toNext(require);
    }
}

// 系統分析師
export class SystemAnalyst extends RequireHandler {

    public handleRequire(require: Require): string {

        const handler: string = 'SystemAnalyst';

        if(require.getHandler() === handler)
            return handler;
        else
            return this.toNext(require);
    }
}