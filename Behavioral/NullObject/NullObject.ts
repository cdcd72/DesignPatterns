// 動物介面
interface Animal {

    /**
     * 叫聲
     * @returns void
     */
    makeSound(): string | undefined;
}

// 貓
export class Cat implements Animal {

    makeSound(): string {
        return '喵喵喵~';
    }
}

// 動物空物件
export class NullAnimal implements Animal {

    makeSound(): undefined {
        // 可以"依據情況"回傳你認為的空物件情況(ex. Null, Undefined, 0)或都不處理
        // 通常會依據回傳型態來決定或者是外部要處理 error handling
        return undefined;
    }
}

// 人
export class Person {

    // 多數人寫法
    hear(animal?: Animal): string | undefined {
        // 一般來說會先確認是不是 Null 才呼叫該物件方法
        if(animal != undefined) 
            return animal.makeSound();
    }

    // 假設當初設計就有考慮利用"空物件模式"來增加程式可讀性 
    hearWithNullObjectPattern(animal: Animal): string | undefined {
        return animal.makeSound();
    }
}
