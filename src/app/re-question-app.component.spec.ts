import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { REQuestionAppAppComponent } from '../app/re-question-app.component';

beforeEachProviders(() => [REQuestionAppAppComponent]);

describe('App: REQuestionApp', () => {
  it('should create the app',
      inject([REQuestionAppAppComponent], (app: REQuestionAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'re-question-app works!\'',
      inject([REQuestionAppAppComponent], (app: REQuestionAppAppComponent) => {
    expect(app.title).toEqual('re-question-app works!');
  }));
});
