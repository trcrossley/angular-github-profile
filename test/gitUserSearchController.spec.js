describe('GitUserSearchController', function() {

  beforeEach(module('GitUserSearch'));

  var ctrl;

  describe('when searching for a user', function() {
    var fakeUserInfo, scope, fakeSearch;

    beforeEach(function() {
      fakeSearch = jasmine.createSpyObj('fakeSearch', ['query']);

      module({
        Search: fakeSearch
      });
    });

    beforeEach(inject(function ($q, $rootScope, $controller) {
      scope = $rootScope;
      fakeSearch.query.and.returnValue($q.when( { data: items }));
      ctrl = $controller('GitUserSearchController');
    }));

    it("includes user search results in user data", function() {
      ctrl.searchTerm = 'tansaku';
      ctrl.doSearch();
      scope.$apply();
      expect(ctrl.searchResult).toEqual(items);
    });
  });
});
