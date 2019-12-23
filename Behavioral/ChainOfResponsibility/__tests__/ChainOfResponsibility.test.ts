import { Require, Programmer,  ProgrammerAnalyst, SystemAnalyst } from '../ChainOfResponsibility';

describe('Chain of require process scenario', () => {

  // 需求及不明確，沒人能處理
  it('Require not clear no one can process it..', () => {

    // 沒人能處理
    let require = new Require(undefined);

    // 需求責任鏈
    let requireHandler = new SystemAnalyst(new ProgrammerAnalyst(new Programmer(undefined)));

    // 預期為沒人能處理
    expect(requireHandler.handleRequire(require)).toBe('None');
  });

  // 需求不明確，需要由系統分析師處理
  it('Require not clear until system analyst process it..', () => {

    const handler = 'SystemAnalyst';

    // 指名給系統分析師處理
    let require = new Require(handler);

    // 需求責任鏈
    let requireHandler = new SystemAnalyst(new ProgrammerAnalyst(new Programmer(undefined)));

    // 預期為系統分析師處理此需求
    expect(requireHandler.handleRequire(require)).toBe(handler);
  });

  // 需求尚且明確，可由程式分析師處理
  it('Require clear until programmer analyst process it..', () => {

    const handler = 'ProgrammerAnalyst';

    // 指名給程式分析師處理
    let require = new Require(handler);

    // 需求責任鏈
    let requireHandler = new SystemAnalyst(new ProgrammerAnalyst(new Programmer(undefined)));

    // 預期為程式分析師處理此需求
    expect(requireHandler.handleRequire(require)).toBe(handler);
  });

  // 需求足夠明確，可由程式設計師處理
  it('Require clear until programmer process it..', () => {

    const handler = 'Programmer';

    // 指名給程式設計師處理
    let require = new Require(handler);

    // 需求責任鏈
    let requireHandler = new SystemAnalyst(new ProgrammerAnalyst(new Programmer(undefined)));

    // 預期為程式設計師處理此需求
    expect(requireHandler.handleRequire(require)).toBe(handler);
  });
});