angular.module('KainosApp')
.controller('topCtrl', ['$scope', '$http', function($scope, $http) {
                $scope.getAllRec = function(){ 
                     $http({method: 'GET', url: '/topGenre'}).
                        success(function(data, status) { 
                              $scope.dataset = data; 
                        }).
                        error(function(data, status) {
                          $scope.dataset = data || "Request failed "; 
                      }); 
                }
                $scope.getAllRec();   
  
 //  	$http.get('/').
	// success(function(userHistory) {
	// 	$scope.dataset = userHistory;
	// });
}]);