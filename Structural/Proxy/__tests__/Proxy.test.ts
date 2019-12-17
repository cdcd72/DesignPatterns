import { Studio, Sponsor } from '../Proxy';

describe('Get Sponsored Scenario...', () => {
  // 工商費合理，因為高於 2 萬
  it('Acceptable cost...', () => {
    let studio = new Studio();
    let sponsor = new Sponsor(40000);
    expect(studio.doSponsoredPost(sponsor)).toBe(40000);
  });
  // 工商費不合理，因為低於 2 萬，所以拒絕幫忙工商...
  it('Unacceptable cost...', () => {
    let studio = new Studio();
    let sponsor = new Sponsor(10000);
    expect(studio.doSponsoredPost(sponsor)).toBe(0);
  });
});