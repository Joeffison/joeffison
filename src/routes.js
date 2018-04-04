angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider, $transitionsProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $urlRouterProvider.rule(($injector, $location) => {
    const path = $location.path();

    if (path[path.length - 1] === '/') {
      // if last character is a slash, return the same url without the slash
      return path.substr(0, path.length - 1);
    }
  });

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/controllers/home/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    });

  $stateProvider
    .state('virtus', {
      url: '/work/virtus',
      templateUrl: 'app/controllers/virtus/virtus.html',
      controller: 'VirtusController',
      controllerAs: 'vm'
    });

  $stateProvider
    .state('credits', {
      url: '/credits',
      templateUrl: 'app/controllers/credits/credits.html',
      controller: 'CreditsController',
      controllerAs: 'vm'
    });
}
