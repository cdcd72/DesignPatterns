import { SomeAlgorithm } from '../TemplateMethod';

describe('Running algorithm scenario', () => {

  // 不含掛鉤操作
  it('Without hook operation...', () => {

    const someAlgorithm = new SomeAlgorithm();

    // 執行演算法步驟
    someAlgorithm.executeSteps();
  });

  // 需含掛鉤操作
  it('With hook operation...', () => {
    
    const withHookOperation = true;

    const someAlgorithm = new SomeAlgorithm(withHookOperation);

    // 執行演算法步驟
    someAlgorithm.executeSteps();
  });
});