import { Singleton } from '../Singleton';

describe('Singleton scenario', () => {

  // 只能產生一個實例出來...
  it('Only one instance..', () => {

    // 此時要產生一個實例
    const instance1 = Singleton.getInstance();

    // 此時需要拿到先前產生的實例
    const instance2 = Singleton.getInstance();

    // 預期兩實例應相等(參考相同)
    expect(instance1).toBe(instance2);
  });
});