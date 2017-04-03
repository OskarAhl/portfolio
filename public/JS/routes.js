angularApp.config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'pages/main.html',
        controller:'mainController'
      })
      .when('/about', {
        templateUrl: 'pages/about.html',
        controller: ''
      })
      .otherwise({ redirectTo: '/' })

});
