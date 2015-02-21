var app = angular.module('github-api');

app.service('githubService', function($http, $q, env){

  	var param = "?client_id=" + env.id + "&client_secret=" + env.secrect;

    this.getUser = function(user) {

		var url = "https://api.github.com/users/" + user + param;
		var deferred = $q.defer();

        $http({
        	method: 'GET', 
        	url: url
        })
        .then(function (data) {

        	deferred.resolve(data.data);
		});
		return deferred.promise;
    };

	this.getUsers = function() {

		var url = "https://api.github.com/users" + param;
		var deferred = $q.defer();

        $http({
        	method: 'GET', 
        	url: url
        })
        .then(function (data) {

        	deferred.resolve(data.data);
		});
		return deferred.promise;
    };


});
