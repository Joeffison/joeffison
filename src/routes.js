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
    .state('petitcode', {
      url: '/work/petitcode',
      templateUrl: 'app/controllers/petitcode/petitCode.html',
      controller: 'PetitCodeController',
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
    .state('ufcg', {
      url: '/bachelor/ufcg',
      templateUrl: 'app/controllers/ufcg/ufcg.html',
      controller: 'UfcgController',
      controllerAs: 'vm'
    });

  $stateProvider
    .state('tud', {
      url: '/research/tud',
      templateUrl: 'app/controllers/tud/tud.html',
      controller: 'TudController',
      controllerAs: 'vm'
    });

  $stateProvider
    .state('lsd', {
      url: '/research/lsd',
      templateUrl: 'app/controllers/lsd/lsd.html',
      controller: 'LsdController',
      controllerAs: 'vm'
    });

  $stateProvider
    .state('splab', {
      url: '/research/splab',
      templateUrl: 'app/controllers/splab/splab.html',
      controller: 'SplabController',
      controllerAs: 'vm'
    });

  $stateProvider
    .state('contact', {
      url: '/contact',
      templateUrl: 'app/controllers/contact/contact.html',
      controller: 'ContactController',
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
