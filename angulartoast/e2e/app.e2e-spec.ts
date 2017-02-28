import { AngulartoastmessagePage } from './app.po';

describe('angulartoastmessage App', function() {
  let page: AngulartoastmessagePage;

  beforeEach(() => {
    page = new AngulartoastmessagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
