import { TrackerPage } from './app.po';

describe('tracker App', () => {
  let page: TrackerPage;

  beforeEach(() => {
    page = new TrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
