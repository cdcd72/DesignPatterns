// 文章 - Context
export class Article {

    private state?: State;

    constructor(state: State) {
        this.changeState(state);
    }

    /**
     * 改變狀態
     * @param  {State} state
     */
    public changeState(state: State): void {
        console.log(`Article: Transition to ${(<any>state).constructor.name}.`);
        this.state = state;
        this.state.setArticle(this);
    }

    /**
     * 呈現
     * @returns void
     */
    public render(): void {
        this.state?.render();
    }

    /**
     * 發佈
     * @returns void
     */
    public publish(): void {
        this.state?.publish();
    }
}

// 狀態 - State
abstract class State {

    protected article?: Article;

    /**
     * 設定文章
     * @param  {Article} article
     */
    setArticle(article: Article) {
        this.article = article;
    }

    /**
     * 呈現
     * @returns void
     */
    public abstract render(): void;

    /**
     * 發佈
     * @returns void
     */
    public abstract publish(): void;
}

// 草稿 - ConcreteState
export class Draft extends State {

    public render(): void {
        console.log('Display draft article.');
    }

    public publish(): void {
        console.log('Publish draft article.');
        this.article?.changeState(new Moderating());
    }
}

// 審核 - ConcreteState
export class Moderating extends State {
    
    public render(): void {
        console.log('Display moderating article.');
    }

    public publish(): void {
        console.log('Publish moderated article.');
        this.article?.changeState(new Publishing());
    }
}

// 發佈 - ConcreteState
export class Publishing extends State {
 
    public render(): void {
        console.log('Display moderated article.');
    }

    public publish(): void {
        console.log('Article published.');
    }
}