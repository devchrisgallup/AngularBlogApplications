import { Grocerylist01Page } from './app.po';

describe('grocerylist01 App', function() {
  let page: Grocerylist01Page;

  beforeEach(() => {
    page = new Grocerylist01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
