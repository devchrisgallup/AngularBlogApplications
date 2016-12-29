import { FirebasestarterPage } from './app.po';

describe('firebasestarter App', function() {
  let page: FirebasestarterPage;

  beforeEach(() => {
    page = new FirebasestarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
