import { Character, Game,  GameCaretaker } from '../Memento';

describe('Game scenario', () => {

  // 儲存並還原狀態
  it('Save and restore...', () => {

    // 遊戲
    const game = new Game();

    // 先創造一個角色
    game.createCharacter(new Character(100, 0));

    // 預存初始狀態
    const memento = game.saveToMemento();

    // 遊玩途中血量歸零死亡
    game.play(-100, 10);

    // 復原先前狀態
    game.restoreFromMemento(memento);

    // 預期為初始狀態
    expect(game.getCharacter()?.getHp()).toBe(100);
    expect(game.getCharacter()?.getExp()).toBe(0);
  });

  // 快照
  it('Snapshot...', () => {

    // 遊戲
    const game = new Game();

    // 遊戲存檔器(想保有多個狀態)
    const gameCaretaker = new GameCaretaker();

    // 先創造一個角色
    game.createCharacter(new Character(100, 0));

    // 儲存狀態至遊戲存檔器(序號 = 1)
    gameCaretaker.setMemento(1, game.saveToMemento());

    // 遊玩途中血量減50
    game.play(-50, 10);

    // 儲存狀態至遊戲存檔器(序號 = 2)
    gameCaretaker.setMemento(2, game.saveToMemento());

    // 遊玩途中血量再減50(歸零死亡)
    game.play(-50, 10);

    // 復原先前狀態(序號 = 2)
    game.restoreFromMemento(gameCaretaker.getMemento(2));

    // 預期為(序號 = 2)狀態
    expect(game.getCharacter()?.getHp()).toBe(50);
    expect(game.getCharacter()?.getExp()).toBe(10);
  });
});