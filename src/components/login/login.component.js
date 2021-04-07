const angular = require('angular');

angular.module('app-bootstrap').component('login', {
  template: require('./login.html'),
  controller: ['$state', function ($state) {
    this.user = '';
    this.pass = '';
    this.submit = function() {
      if (this.user === 'user@gmail.com' && this.pass === '123456') {
        $state.go('list');
      } else {
        // eslint-disable-next-line no-alert
        window.alert('el usuario o la contraseña es incorrecto');
        $state.reload();
      }
    };
  }]
});
