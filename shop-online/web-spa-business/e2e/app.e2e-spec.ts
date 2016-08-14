import { WebSpaBusinessPage } from './app.po';

describe('web-spa-business App', function() {
  let page: WebSpaBusinessPage;

  beforeEach(() => {
    page = new WebSpaBusinessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
