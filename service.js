var app = angular.module('github-api');

app.service('githubService', function($http, $q){

    this.getUser = function(user) {

		var url = "https://api.github.com/users/" + user ;
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

		var url = "https://api.github.com/users";
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
