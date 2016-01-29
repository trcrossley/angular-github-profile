githubUserSearch.factory('Search', ['$http', function($http) {

  var queryUrl = 'https://api.github.com/search/users';
  var access_token = 'd704e165fc65ba45317017132c6362c04416ca11';

  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm,
          'access_token': access_token
        }
      });
    }
  };
}]);
