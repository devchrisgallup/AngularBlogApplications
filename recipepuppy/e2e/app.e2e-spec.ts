import { RecipepuppyPage } from './app.po';

describe('recipepuppy App', () => {
  let page: RecipepuppyPage;

  beforeEach(() => {
    page = new RecipepuppyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
