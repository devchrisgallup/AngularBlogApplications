import { GpsPage } from './app.po';

describe('gps App', () => {
  let page: GpsPage;

  beforeEach(() => {
    page = new GpsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
