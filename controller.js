var app = angular.module('github-api');

app.controller('GitHubController', function($scope, githubService) {

	$scope.getUser = function () {

    	return githubService.getUser($scope.searchText)
    	.then(function (data) {

    		console.log(data);
        	return $scope.user = data;
        });
    };

    $scope.getUsers = function () {

    	return githubService.getUsers()
    	.then(function (data) {

    		console.log(data);
        	return $scope.user = data;
        });
    };

});
