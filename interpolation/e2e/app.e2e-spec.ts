import { InterpolationPage } from './app.po';

describe('interpolation App', function() {
  let page: InterpolationPage;

  beforeEach(() => {
    page = new InterpolationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
