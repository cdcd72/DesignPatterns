import { ConcreteRemoteControl, SonyControl, SamsungControl } from '../Bridge';

describe('ConcreteRemoteControl Scenario', () => {
  // Sony 遙控器
  it('Sony Television', () => {
    let sonyControl = new SonyControl();
    let concreteRemoteControl = new ConcreteRemoteControl(sonyControl);
    console.log('Operation...');
    concreteRemoteControl.on();
    concreteRemoteControl.setChannel(47);
    concreteRemoteControl.off();
    concreteRemoteControl.otherFunction();
    expect(concreteRemoteControl.getControlName()).toBe('SonyControl');
  });
  // Samsung 遙控器
  it('Samsung Television', () => {
    let samsungControl = new SamsungControl();
    let concreteRemoteControl = new ConcreteRemoteControl(samsungControl);
    console.log('Operation...');
    concreteRemoteControl.on();
    concreteRemoteControl.setChannel(37);
    concreteRemoteControl.off();
    concreteRemoteControl.otherFunction();
    expect(concreteRemoteControl.getControlName()).toBe('SamsungControl');
  });
});