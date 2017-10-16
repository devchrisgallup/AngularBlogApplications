import { FirebaseappPage } from './app.po';

describe('firebaseapp App', () => {
  let page: FirebaseappPage;

  beforeEach(() => {
    page = new FirebaseappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
