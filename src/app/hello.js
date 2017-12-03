angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function (ContactFactory) {
      var vm = this;
      var id = 0;

      vm.hero = 'New Contact!';
      vm.heroList = 'List a contact';
      vm.list = [];
      vm.form = {
        id: 0,
        name: '',
        telephone: '',
        email: ''
      };

      vm.add = add;
      vm.edit = edit;


      (function onInit() {
        return vm.list = ContactFactory.list();
      })();

      function add(contact) {
        if(!contact){
          alert('You must need a valid contact');
          return;
        }

        if(contact.id){
          clean();
          return ContactFactory.edit(contact);
        }

        contact.id = id = id + 1;

        clean();
        ContactFactory.add(contact);

      }

      function edit(contact, indexList){
        if(!contact){
          alert('You must need a valid contact');
          return;
        }

        vm.form.name = contact.name;
        vm.form.telephone = contact.telephone;
        vm.form.email = contact.email;
        vm.form.id = contact.id;

      }

      function clean(){
        return vm.form = {
          id: '',
          name: '',
          telephone: '',
          email: ''
        };
      }

    }
  })


/*
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

 */ 
