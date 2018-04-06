angular
  .module('app')
  .component('mainNav', {
    templateUrl: 'app/components/main-nav/main-nav.html',
    controller: ['$document', MainNav]
  });

function MainNav($document) {
  $document.ready(() => {
    angular.element($document.querySelectorAll('li.dropdown')).on('click', event => {
      event.preventDefault();
      angular.element(event.target.parentElement).toggleClass('active');
      event.stopPropagation();
    });

    // Hide dropdown if clicked somewhere 'outside'
    $document.on('click', event => {
      closeAllNavMenus();
      return $document.off('click', event);
    });
  });

  function closeAllNavMenus() {
    angular.element($document.querySelectorAll('li.dropdown')).removeClass('active');
  }
}
