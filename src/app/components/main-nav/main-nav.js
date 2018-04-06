angular
  .module('app')
  .component('mainNav', {
    templateUrl: 'app/components/main-nav/main-nav.html',
    controller: ['$document', MainNav]
  });

function MainNav($document) {

  $document.ready(() => {
    console.log($document.find('#dropdown-work'));
    console.log($document.find('.dropdown'));
    console.log($document.find('li.dropdown'));

    angular.element(document.querySelectorAll('li.dropdown')).on('click', event => {
      event.preventDefault();
      console.log(angular.element(event.target.parentElement));
      angular.element(event.target.parentElement).toggleClass('active');
      event.stopPropagation();
    });

    // Hide dropdown if clicked somewhere 'outside'
    $document.on('click', event => {
      console.log('close menu');
      closeAllNavMenus();
      return $document.off('click', event);
    });
  });

  function closeAllNavMenus() {
    angular.element(document.querySelectorAll('li.dropdown')).removeClass('active');
  }
}
