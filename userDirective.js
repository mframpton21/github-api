var app = angular.module('github-api');

app.directive('singleUser', function() {

	return {
    	restrict: 'E',
    	templateUrl: '/user.html'
  	}
});