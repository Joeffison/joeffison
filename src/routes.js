angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider, $transitionsProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/controllers/home/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    });

  $stateProvider
    .state('credits', {
      url: '/credits/',
      templateUrl: 'app/controllers/credits/credits.html',
      controller: 'CreditsController',
      controllerAs: 'vm'
    });
}
