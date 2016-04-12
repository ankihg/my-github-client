const angular = require('angular');

angular.module('app', [])
  .controller('GitHubController', ['$http', function($http) {
    this.plz = 'plz respond';
  }]);
