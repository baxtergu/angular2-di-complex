import { Angular2DiComplexPage } from './app.po';

describe('angular2-di-complex App', () => {
  let page: Angular2DiComplexPage;

  beforeEach(() => {
    page = new Angular2DiComplexPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
