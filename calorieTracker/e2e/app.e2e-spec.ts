import { CalorieTrackerPage } from './app.po';

describe('calorie-tracker App', () => {
  let page: CalorieTrackerPage;

  beforeEach(() => {
    page = new CalorieTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
