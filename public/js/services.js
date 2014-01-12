angular.module('dc.services', [])

.factory('Titles', function($window, $http, DCAPI) {
  'use strict';
  
  // Any function returning a promise object can be used to load values asynchronously
  var query = function(val) {
    return $http.get(DCAPI.baseUrl + DCAPI.titles, {
      params: {
        q: val
      }
    }).then(function(res){
      var titleMatches = [];
      angular.forEach(res.data.titles, function(title){
        titleMatches.push({
          titleName: title.TitleName,
          id: title.TitleId
        });
      });
      console.debug(titleMatches);
      return titleMatches;
    });
  };
  
  var get = function(id) {
    return $http.get(DCAPI.baseUrl + DCAPI.details + id).then(function(res){
      console.debug('get',id,res);
      return res.data.title;
    });
  };

  return {
    all: function() {
      return query('');
    },
    get: get,
    search: query
  };
});
