angular
  .module('app')
  .component('artReference', {
    templateUrl: 'app/components/art-reference/art-reference.html',
    bindings: {
      artist: '<',
      artistPage: '<'
    }
  });
