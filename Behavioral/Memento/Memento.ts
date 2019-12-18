// 角色
export class Character {

    private hp: number;
    private exp: number;

    constructor(hp: number, exp: number) {
        this.hp = hp;
        this.exp = exp;
    }

    /**
     * 取得HP
     * @returns number
     */
    getHp(): number {
        return this.hp;
    }

    /**
     * 取得經驗值
     * @returns number
     */
    getExp(): number {
        return this.exp;
    }

    /**
     * 設定HP
     * @param  {number} hp
     * @returns void
     */
    setHp(hp: number): void {
        this.hp = hp;
    }

    /**
     * 設定經驗值
     * @param  {number} exp
     * @returns void
     */
    setExp(exp: number): void {
        this.exp = exp;
    }
}

// 遊戲 - Originator
export class Game {

    // 角色資料
    private character?: Character;

    /**
     * 創造角色
     * @param  {Character} character
     * @returns void
     */
    createCharacter(character: Character): void {
        this.character = character;
    }

    /**
     * 取得角色
     * @returns Character
     */
    getCharacter(): Character | undefined {
        return this.character;
    }

    /**
     * 玩
     * @param  {number} hp
     * @param  {number} exp
     * @returns void
     */
    play(hp: number, exp: number): void {
        this.character?.setHp((this.character?.getHp() || 0) + hp);
        this.character?.setExp((this.character?.getExp() || 0) + exp);
    }

    /**
     * 存檔
     * @returns GameMemento
     */
    saveToMemento(): GameMemento {
        const nowCharacter = new Character(this.character?.getHp() || 0, this.character?.getExp() || 0);
        return new GameMemento(nowCharacter);
    }

    /**
     * 讀檔
     * @param  {GameMemento|undefined} gameMemento
     * @returns void
     */
    restoreFromMemento(gameMemento: GameMemento | undefined): void {
        this.character = gameMemento?.getCharacter();
    }
}

// 遊戲存檔 - Memento
class GameMemento {

    // 角色資料
    private character: Character;

    constructor(character: Character) {
        this.character = character;
    }

    /**
     * 取得角色資料
     * @returns Character
     */
    getCharacter(): Character {
        return this.character;
    }
}

// 管理遊戲存檔 - Caretaker
export class GameCaretaker {

    // 遊戲存檔(可能多個)
    private records: Array<{ sequence: number, memento: GameMemento}> = [];

    /**
     * 依據序號取得特定遊戲存檔
     * @returns GameMemento
     */
    getMemento(sequence: number): GameMemento | undefined　{
        return this.records.find(function(record){ return record.sequence === sequence; })?.memento;
    }

    /**
     * 設定遊戲存檔
     * @param  {GameMemento} memento
     * @returns void
     */
    setMemento(sequence: number, memento: GameMemento): void {
        this.records.push({sequence, memento});
    }
}