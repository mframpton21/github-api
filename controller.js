var app = angular.module('github-api');

app.controller('GitHubController', function($scope, githubService) {

	$scope.getData = function() {
		if ($scope.searchText.toLowerCase() === "all") {
			getUsers();
		} else {
			getUser($scope.searchText);
		}
		$scope.searchText = '';
	};

	var getUser = function(user) {

    	githubService.getUser(user)
    	.then(function (data) {

    		console.log(data);
        	$scope.user = data;
        });

		githubService.getUserRepos(user)
		.then(function(data) {
			console.log(data.data);
      		$scope.repos = data.data;
      		
    	});        
    };

    var getUsers = function() {

    	githubService.getUsers()
    	.then(function (data) {

    		console.log(data);
        	$scope.user = data;
        });
    };

});
