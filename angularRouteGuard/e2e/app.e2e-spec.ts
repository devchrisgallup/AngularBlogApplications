import { AngularRouteGuardPage } from './app.po';

describe('angular-route-guard App', function() {
  let page: AngularRouteGuardPage;

  beforeEach(() => {
    page = new AngularRouteGuardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
