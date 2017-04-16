angularApp.controller('portfolioController', ['$scope', 'projectData', function($scope, projectData) {

  $scope.projectData = projectData.data;

}]);;
