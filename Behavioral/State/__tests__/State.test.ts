import { Article, Draft, Moderating, Publishing } from '../State';

describe('Article flow scenario', () => {

  // 文章發佈可能的流程
  it('Article published...', () => {

    // 文章初始狀態為草稿
    const article = new Article(new Draft());

    // 呈現文章草稿，而後進入下一階段(審核)
    article.render();
    article.publish();

    // 呈現正在審核的文章，而後進入下一階段(待發佈)
    article.render();
    article.publish();

    // 呈現已審核完的文章，而後發佈
    article.render();
    article.publish();
  });
});