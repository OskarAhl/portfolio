angularApp.controller('mainController', ['$scope', 'sharedata', function($scope, sharedata) {

  $scope.data = sharedata.data;
  console.log($scope.data);

}]);;
