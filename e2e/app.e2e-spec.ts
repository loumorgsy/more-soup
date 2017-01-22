import { MoreSoupPage } from './app.po';

describe('more-soup App', function() {
  let page: MoreSoupPage;

  beforeEach(() => {
    page = new MoreSoupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
