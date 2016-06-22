import { REQuestionAppPage } from './app.po';

describe('re-question-app App', function() {
  let page: REQuestionAppPage;

  beforeEach(() => {
    page = new REQuestionAppPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('re-question-app works!');
  });
});
