import { AppointyPage } from './app.po';

describe('appointy App', () => {
  let page: AppointyPage;

  beforeEach(() => {
    page = new AppointyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
