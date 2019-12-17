// 戰鬥策略
interface FightStrategy {

    /**
     * 執行
     * @returns string
     */
    execute(): string;
}

// 使用十萬伏特
export class UseThunderbolt implements FightStrategy {
    execute() {
        return moves.thunderbolt;
    }
}

// 使用電光一閃
export class UseQuickAttack implements FightStrategy {
    execute() {
        return moves.quickAttack;
    }
}

// 使用鐵尾
export class UseIronTail implements FightStrategy {
    execute() {
        return moves.ironTail;
    }
}

// 皮卡丘
export class Pikachu {

    fightStrategy?: FightStrategy;
    
    /**
     * 改變策略
     * @param  {FightStrategy} fightStrategy
     * @returns void
     */
    changeFightStrategy(fightStrategy: FightStrategy): void {
        this.fightStrategy = fightStrategy;
    }

    /**
     * 攻擊
     * @returns string
     */
    attack(): string {

        if(this.fightStrategy === undefined)
            this.fightStrategy = new UseIronTail();

        return this.fightStrategy.execute();
    }
}

// 招式表
export enum moves {
    thunderbolt = "十萬伏特",
    quickAttack = "電光一閃",
    ironTail = "鐵尾"
}