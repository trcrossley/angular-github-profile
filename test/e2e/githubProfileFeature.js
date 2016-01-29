describe('Github Profile finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });
  
  it('finds profiles', function() {
    browser.get('http://localhost:8080');

    element(by.model('searchCtrl.searchTerm')).sendKeys('spike01');
    element(by.className('btn')).click();

    expect(element(by.binding('user.login')).getText()).toEqual('spike01');
  });
});
