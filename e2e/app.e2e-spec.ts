import { TutorialSiteFrontEndPage } from './app.po';

describe('tutorial-site-front-end App', function() {
  let page: TutorialSiteFrontEndPage;

  beforeEach(() => {
    page = new TutorialSiteFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
