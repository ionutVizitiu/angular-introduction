import { A2IntroductionPage } from './app.po';

describe('a2-introduction App', function() {
  let page: A2IntroductionPage;

  beforeEach(() => {
    page = new A2IntroductionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
