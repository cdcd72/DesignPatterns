// 藝術家介面
interface Artist {

    /**
     * 做業配
     * @param  {Sponsor} sponsor
     * @returns number
     */
    doSponsoredPost(sponsor: Sponsor): number;
}

// Youtuber
class Youtuber implements Artist {

    public doSponsoredPost(sponsor: Sponsor): number {
        // 做業配...
        return sponsor.getCost(); 
    }
}

// 工作室(代理人)
export class Studio implements Artist {

    private youtuber: Youtuber;

    constructor() {
        this.youtuber = new Youtuber();
    }

    public doSponsoredPost(sponsor: Sponsor): number {
        
        let cost = 0;

        // 工商費超過 2 萬，Youtuber 才接工商...
        if(sponsor.getCost() > 20000)
            cost = this.youtuber.doSponsoredPost(sponsor);

        return cost;
    }
}

// 贊助商
export class Sponsor {

    // 花費
    private cost: number;

    constructor(cost: number) {
        this.cost = cost;
    }

    // 設定花費
    public getCost(): number {
        return this.cost;
    }
}