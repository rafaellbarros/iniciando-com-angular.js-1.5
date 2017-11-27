angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function () {
      var vm = this;

      vm.hello = 'Hello World!';
      vm.person = {
        name : 'Rafael',
        lastname: 'Silva'
      };

      vm.alertMe = function() {
        alert(vm.person.name + ' ' + vm.person.lastname);
      };
    }
  });
