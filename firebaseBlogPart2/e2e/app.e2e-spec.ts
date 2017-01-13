import { BigtestPage } from './app.po';

describe('bigtest App', function() {
  let page: BigtestPage;

  beforeEach(() => {
    page = new BigtestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
