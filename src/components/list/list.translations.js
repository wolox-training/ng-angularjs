const angular = require('angular');

angular.module('app-bootstrap').config([
  '$translateProvider',
  function ($translateProvider) {

    $translateProvider.translations('es', {
      LIST: {
        TITLE: 'List'
      }
    });
  }
]);
