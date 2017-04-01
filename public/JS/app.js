var angularApp = angular.module('angularApp', ['ngRoute']);

angularApp.config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'pages/main.html',
        controller:''
      })
      .when('/about', {
        templateUrl: 'pages/about.html',
        controller: ''
      })

});
