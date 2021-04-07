const angular = require('angular');

angular.module('app-bootstrap').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/',
        component: 'login'
      })
      .state('component1', {
        url: '/component1',
        component: 'component1'
      })
      .state('component2', {
        url: '/component2',
        component: 'component2'
      })
      .state('detail', {
        url: '/detail',
        component: 'detail'
      })
      .state('list', {
        url: '/list',
        component: 'list'
      })
      .state('centered', {
        url: '/centered',
        component: 'centered'
      });
    $urlRouterProvider.otherwise('/');
  }
]);

angular.module('app-bootstrap').run(['$transitions',
  function ($transitions) {
    $transitions.onBefore({ from: 'home' }, transition => {
      // eslint-disable-next-line no-console
      console.log('Route changed, use ransition.abort(); for abort if you need', transition);
    });
  }
]);
