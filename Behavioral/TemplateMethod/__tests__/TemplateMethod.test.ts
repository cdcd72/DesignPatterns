import { SomeAlgorithm } from '../TemplateMethod';

describe('Running algorithm scenario', () => {

  it('Without hook operation...', () => {

    const someAlgorithm = new SomeAlgorithm();

    // 執行演算法步驟
    someAlgorithm.executeSteps();
  });

  it('With hook operation...', () => {

    // 需含掛鉤操作
    const withHookOperation = true;

    const someAlgorithm = new SomeAlgorithm(withHookOperation);

    // 執行演算法步驟
    someAlgorithm.executeSteps();
  });
});