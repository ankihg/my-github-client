const angular = require('angular');

angular.module('app', [])
  .controller('GitHubController', ['$http', function($http) {
    this.plz = 'plz respond';

    this.url = 'https://api.github.com';
    this.userPath = this.url + '/user';
    this.githubToken = localStorage.githubToken;

    this.authenticate = function() {
      console.log('authenticate');
      var req = {
        method: 'GET',
        url: this.url,
        headers: {'Authorization': 'token ' + this.githubToken}
      }
      console.log(req);
      $http(req)
        .then(function(res) {
          console.log(res.data);
        })
        .catch(function(err) {
          console.log(err);
        })
    };

    this.getRepos = function() {
      var req = {
        method: 'GET',
        url: this.userPath + '/repos',
        headers: {'Authorization': 'token ' + this.githubToken}
      }
      $http(req)
        .then(function(res) {
          console.log(res.body);
          console.log(res.data);
        })
        .catch(function(err) {
          console.log(err);
        });
    };

  }]);
