import { Pikachu, UseThunderbolt, UseQuickAttack } from '../Strategy';
import { moves } from '../Strategy';

// 戰鬥情境1
test('FightScenario_1', () => {
  let pikachu = new Pikachu();
  // ...
  // 對方寶可夢正接近皮卡丘，打算使用近身攻擊！
  // ...
  // ...
  // 皮卡丘使用鐵尾擊退對方！
  expect(pikachu.attack()).toBe(moves.ironTail);
  // ...
});

// 戰鬥情境2
test('FightScenario_2', () => {
  let pikachu = new Pikachu();
  // ...
  // 對方寶可夢為飛行系，但一直與皮卡丘保持距離！
  // ...
  // ...
  // 皮卡丘使用十萬伏特吧！
  pikachu.changeFightStrategy(new UseThunderbolt());
  expect(pikachu.attack()).toBe(moves.thunderbolt);
  // ...
});

// 戰鬥情境3
test('FightScenario_3', () => {
  let pikachu = new Pikachu();
  // ...
  // 對方寶可夢為地面系，但一直與皮卡丘保持距離！
  // ...
  // ...
  // 皮卡丘使用電光一閃，與對方寶可夢拉近距離！
  pikachu.changeFightStrategy(new UseQuickAttack());
  expect(pikachu.attack()).toBe(moves.quickAttack);
  // ...
});
