// 菜單項目
export class MenuItem {

    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    /**
     * 取得名稱
     * @returns string
     */
    getName(): string {
        return this.name;
    }
}

// 反覆器 - Iterator
interface Iterator<T> {
    
    /**
     * 是否有下一個元素
     * @returns boolean
     */
    hasNext(): boolean;

    /**
     * 下一個元素
     * @returns T
     */
    next(): T;
}

// 聚集 - Aggregate
interface Aggregate<T> {

    getIterator(): Iterator<T>;
}

// 午餐菜單反覆器 - ConcreteIterator
class LunchMenuIterator implements Iterator<MenuItem> {

    private menu: LunchMenu;

    // 是否反轉
    private reverse: boolean;

    // 定義位置
    private position: number;

    constructor(menu: LunchMenu, reverse: boolean = false) {
        this.menu = menu;
        this.reverse = reverse;
        this.position = reverse ? this.menu.getCount() - 1 : 0;
    }

    hasNext(): boolean {
        if(this.reverse)
            return this.position >= 0;
        else
            return this.position < this.menu.getCount();
    }

    next(): any {
        const menuItem = this.menu.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return menuItem;
    }
}

// 午餐菜單 - ConcreteAggregate
export class LunchMenu implements Aggregate<MenuItem> {

    private menuItems: Array<MenuItem> = [];

    /**
     * 取得菜單項目(多個)
     * @returns Array
     */
    getItems(): Array<MenuItem> {
        return this.menuItems;
    }

    /**
     * 取得菜單項目數量
     * @returns number
     */
    getCount(): number {
        return this.menuItems.length;
    }

    /**
     * 加入菜單項目
     * @param  {MenuItem} menuItem
     */
    addItem(menuItem: MenuItem) {
        this.menuItems.push(menuItem);
    }

    /**
     * 取得菜單項目反覆器
     * @returns Iterator
     */
    getIterator(): Iterator<MenuItem> {
        return new LunchMenuIterator(this);
    }

    /**
     * 菜單項目反轉反覆器
     * @returns Iterator
     */
    getReverseIterator(): Iterator<MenuItem> {
        return new LunchMenuIterator(this, true);
    }
}