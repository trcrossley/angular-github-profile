githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {

  // var searchResource = $resource('https://api.github.com/search/users?');
  var self = this;
  var token = '22e7d8c3e8eadb17a9fbdfc5a5a0bc33d85e127a';

  self.doSearch = function() {
    Search.query(self.searhTerm)
      .then(function(response) {
        self.searchResult = response.data;
      });
  };

}]);
