import { AngularmlbPage } from './app.po';

describe('angularmlb App', () => {
  let page: AngularmlbPage;

  beforeEach(() => {
    page = new AngularmlbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
