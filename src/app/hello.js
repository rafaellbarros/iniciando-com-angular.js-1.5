angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function (MathFactory, MathService) {
      var vm = this;

      vm.hello = 'Hello World!';
      vm.person = {
        name : 'Rafael',
        lastname: 'Silva'
      };

      vm.list = [{
        name: 'Rafael',
        lastname: 'Silva'
      },
      {
        name: 'Herbertt',
        lastname: 'Carneiro'       
      },
      {
        name: 'Joe',
        lastname: 'Miro'
      }];

      vm.alertMe = function() {
        alert(vm.person.name + ' ' + vm.person.lastname);
      };

      vm.sum = function(num1,num2){
        vm.somar = MathService.sumService(num1,num2); 
        return vm.somar;
      };

      vm.sub = function(num1,num2){
        vm.subtrair = MathService.subService(num1,num2);
        return  vm.subtrair;
      }
    }
  });
