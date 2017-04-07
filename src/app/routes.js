angularApp.config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'app/portfolio/portfolio.html',
        controller: 'portfolioController'
      })
      .when('/about', {
        templateUrl: 'app/about/about.html',
        controller: ''
      })
      .otherwise({ redirectTo: '/' })

});
