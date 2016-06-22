export class REQuestionAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('re-question-app-app h1')).getText();
  }
}
