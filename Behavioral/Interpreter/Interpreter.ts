// Context
export class Context {

    private context: string;

    constructor(context: string) {
        this.context = context;
    }

    public getContext(): string {
        return this.context;
    }
}

// AbstractExpression
export interface Expression {

    /**
     * 直譯
     * @param  {string} context
     * @returns boolean
     */
    interpret(context: string): boolean;
}

// TerminalExpression
export class TerminalExpression implements Expression {

    private data: string; 
  
    constructor(data: string) { 
        this.data = data;  
    } 
  
    public interpret(context: string): boolean {

        if(context.includes(this.data)) 
            return true; 
        else
            return false;   
    } 
}

// NonTerminalExpression
export class OrExpression implements Expression {

    private expression1: Expression;
    private expression2: Expression;

    constructor(expression1: Expression, expression2: Expression) {

        this.expression1 = expression1;
        this.expression2 = expression2;
    }

    public interpret(context: string): boolean {

        return this.expression1.interpret(context) || this.expression2.interpret(context);
    }
}

// NonTerminalExpression
export class AndExpression implements Expression {

    private expression1: Expression;
    private expression2: Expression;

    constructor(expression1: Expression, expression2: Expression) {

        this.expression1 = expression1;
        this.expression2 = expression2;
    }

    public interpret(context: string): boolean {

        return this.expression1.interpret(context) && this.expression2.interpret(context);
    }
}