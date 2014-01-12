// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array or 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('dc', ['ngRoute', 'ngAnimate', 'ngCookies', 'dc.services', 'dc.controllers'])

.config(function($compileProvider) {
  'use strict';
  // Needed for routing to work
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.config(function($routeProvider) {
  'use strict';

  $routeProvider.when('/titles', {
    templateUrl: 'templates/titles.html',
    controller: 'TitleCtrl'
  });

  $routeProvider.when('/titles/:titleId', {
    templateUrl: 'templates/details.html',
    controller: 'DetailsCtrl'
  });

  $routeProvider.otherwise({
    redirectTo: '/titles'
  });

})

.constant('DCAPI', {
  baseUrl: 'http://localhost:3000',
  titles: '/api/titles',
  details: '/api/title/',
});
