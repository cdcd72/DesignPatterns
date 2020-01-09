import { AirportTower, Airliner,  Helicopter, PrivateJet } from '../Mediator';

describe('Airport tower communication scenario', () => {

  // 客機向機場塔台送出指令
  it('Airliner send instruction to airport tower...', () => {

    // 飛機們
    const airliner = new Airliner();
    const helicopter = new Helicopter();
    const privateJet = new PrivateJet();

    // 機場塔台
    const airportTower = new AirportTower(airliner, helicopter, privateJet);

    // 客機向機場塔台送出 A 指令 => 客機將於 A 區域降落，請其它飛行載具避開這個地方！
    airliner.sendInstructionA();
  });

  // 直升機向機場塔台送出指令
  it('Helicopter send instruction to airport tower...', () => {

    // 飛機們
    const airliner = new Airliner();
    const helicopter = new Helicopter();
    const privateJet = new PrivateJet();

    // 機場塔台
    const airportTower = new AirportTower(airliner, helicopter, privateJet);

    // 直升機向機場塔台送出 B 指令 => 直升機將於 B 區域降落，請其它飛行載具避開這個地方！
    helicopter.sendInstructionB();
  });

  // 私人飛機向機場塔台送出指令
  it('Private jet send instruction to airport tower...', () => {

    // 飛機們
    const airliner = new Airliner();
    const helicopter = new Helicopter();
    const privateJet = new PrivateJet();

    // 機場塔台
    const airportTower = new AirportTower(airliner, helicopter, privateJet);

    // 私人飛機向機場塔台送出 C 指令 => 私人飛機將於 C 區域降落，請其它飛行載具避開這個地方！
    privateJet.sendInstructionC();
  });
});