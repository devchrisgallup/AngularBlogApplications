import { IfelsethenPage } from './app.po';

describe('ifelsethen App', () => {
  let page: IfelsethenPage;

  beforeEach(() => {
    page = new IfelsethenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
