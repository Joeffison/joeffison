angular
  .module('app')
  .component('postIt', {
    templateUrl: 'app/components/post-it/post-it.html',
    bindings: {
      text1: '<',
      text2: '<?'
    }
  });
