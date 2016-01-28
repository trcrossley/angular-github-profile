githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

  var searchResource = $resource('https://api.github.com/search/users?');
  var token = '22e7d8c3e8eadb17a9fbdfc5a5a0bc33d85e127a';
  var self = this;

  self.doSearch = function() {
    self.searchResult = searchResource.get(
      { q: self.searchTerm, access_token: token }
    );
  };

}]);
