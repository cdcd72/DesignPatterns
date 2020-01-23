import { Context, Expression, TerminalExpression, OrExpression, AndExpression } from '../Interpreter';

describe('Interpret context scenario', () => {

  // 仍單身
  it('Still single...', () => {

    const context1 = new Context('Neil and Amy this year still single.');
    const context2 = new Context('Stock get married to Candy.');

    const neil: Expression = new TerminalExpression('Neil');
    const amy: Expression = new TerminalExpression('Amy');
    const isSingle: Expression = new OrExpression(neil, amy);

    expect(isSingle.interpret(context1.getContext())).toBe(true);
    expect(isSingle.interpret(context2.getContext())).toBe(false);
  });

  // 已結婚
  it('Get married...', () => {

    const context = new Context('Neil and Amy this year still single, but Stock get married to Candy.');

    const candy = new TerminalExpression("Candy"); 
    const married = new TerminalExpression("married"); 
    const isMarried = new AndExpression(candy, married);

    expect(isMarried.interpret(context.getContext())).toBe(true);
  });
});