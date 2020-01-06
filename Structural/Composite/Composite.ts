// 成員介面 - Component 
interface Employee {

    /**
     * 取得員工編號
     * @returns number
     */
    getId(): number;

    /**
     * 顯示員工細節
     * @returns void
     */
    showDetails(): void;
}

// 程式設計師 - Leaf 
export class Developer implements Employee {

    private id: number;
    private name: string;
    private position: string;

    constructor(id: number, name: string, position: string) {
        this.id = id;
        this.name = name;
        this.position = position;
    }

    getId(): number {
        return this.id;
    }

    showDetails(): void {
        console.log(this.id + ' ' + this.name + ' ' + this.position);
    }
}

// 經理 - Leaf 
export class Manager implements Employee {
    
    private id: number;
    private name: string;
    private position: string;

    constructor(id: number, name: string, position: string) {
        this.id = id;
        this.name = name;
        this.position = position;
    }

    getId(): number {
        return this.id;
    }

    showDetails(): void {
        console.log(this.id + ' ' + this.name + ' ' + this.position);
    }
}

// 公司成員 - Composite
export class CompanyMember implements Employee {

    private members: Array<Employee> = [];

    /**
     * 加入成員
     * @param  {Employee} member
     */
    addMember(member: Employee) {
        this.members.push(member);
    }

    /**
     * 刪除成員
     * @param  {Employee} member
     */
    removeMember(member: Employee) {

        var index: number = -1;

        // 判斷已存在 member 位置 
        this.members.forEach((existsMember, i) => {
            if(existsMember.getId() === member.getId())
                index = i;
        });

        // 找不到已存在成員則丟出例外
        if(index === -1)
            throw new Error('Member not found!');

        // 移除成員
        this.members.splice(index, 1);
    }

    /**
     * 取得底下成員
     * @returns Array
     */
    getMembers(): Array<Employee> {
        return this.members;
    }

    getId(): number {
        // 傳出 -1 代表我並不在意 Composite 裡的 getId 方法，實際上也可以換成丟出例外....
        return -1;
    }

    showDetails(): void {
        this.members.forEach(function(member){
            member.showDetails();
        });
    }
}