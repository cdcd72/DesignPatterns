export class Singleton {

    private static instance: Singleton;

    private constructor() { }

    /**
     * 取得實例
     * @returns Singleton
     */
    public static getInstance(): Singleton {

        if(!Singleton.instance) 
            Singleton.instance = new Singleton();

        return Singleton.instance;
    }
}