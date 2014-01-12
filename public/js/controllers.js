angular.module('dc.controllers', ['ui.bootstrap'])

.controller('TitleCtrl', function($scope, $routeParams, $window, Titles) {
  'use strict';
  function reload() {
    $scope.titles = [];
    Titles.all().then(function(titles) {
      $scope.titles = titles;
      angular.forEach($scope.titles, function(title) {
        console.debug(title);
      });
    });
  }
  $scope.search = Titles.search;
  $scope.onSelect = function ($item, $model, $label) {
    console.debug($item, $model, $label);
    Titles.get($item.id).then(function(title) {
      $scope.title = title;
    });
    $scope.titleSelected = true;
  };
  $scope.title = 'Loading details...';
  $scope.titleSelected = false;
});
