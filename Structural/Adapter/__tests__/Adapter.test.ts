import { Plug } from '../Adapter';
import { Concrete220vWallSocket, Concrete110vPlug, VoltageAdapter } from '../Adapter';

describe('Voltage Adapter Scenario...', () => {

  // 一般使用情況...
  it('In normal situation...', () => {

    // 一般插頭
    let normalPlug: Plug = new Concrete110vPlug();

    // 預期插頭會以 110 伏特進行充電
    expect(normalPlug.charge()).toBe(110);
  });

  // 220 伏特需轉接為 110 伏特情況...
  it('Voltage 220v to 110v...', () => {

    // 外國插座
    let foreignWallSocket = new Concrete220vWallSocket();

    // 一般插頭經過電壓轉接器
    let normalPlug: Plug = new VoltageAdapter(foreignWallSocket);

    // 預期插頭會以 110 伏特進行充電
    expect(normalPlug.charge()).toBe(110);
  });
});