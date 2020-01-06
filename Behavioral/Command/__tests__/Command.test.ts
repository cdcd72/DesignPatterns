import { Light, Television, LightOn, LightOff, TelevisionOn, TelevisionOff, RemoteControl } from '../Command';

describe('Remote control scenario', () => {

  it('Remote control operation...', () => {

    // 燈俱、電視
    const light = new Light();
    const television = new Television();

    // 對燈俱、電視的命令
    const lightOn = new LightOn(light);
    const lightOff = new LightOff(light);
    const televisionOn = new TelevisionOn(television);
    const televisionOff = new TelevisionOff(television);

    // 遙控器
    const remoteControl = new RemoteControl();

    // 設定命令
    remoteControl.setCommand(0, lightOn, lightOff);
    remoteControl.setCommand(1, televisionOn, televisionOff);

    // 打開燈俱
    remoteControl.onPressed(0);

    // 預期燈要打開
    expect(light.getStatus()).toBe(true);

    // 關閉燈俱
    remoteControl.offPressed(0);

    // 預期燈要關閉
    expect(light.getStatus()).toBe(false);

    // 復原
    remoteControl.undoPressed();

    // 預期燈要打開
    expect(light.getStatus()).toBe(true);

    // 打開電視
    remoteControl.onPressed(1);

    // 預期電視要打開
    expect(television.getStatus()).toBe(true);

    // 關閉電視
    remoteControl.offPressed(1);

    // 預期電視要關閉
    expect(television.getStatus()).toBe(false);

    // 復原
    remoteControl.undoPressed();

    // 預期電視要打開
    expect(television.getStatus()).toBe(true);
  });
});