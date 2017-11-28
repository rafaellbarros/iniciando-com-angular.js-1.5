// @ Text
// = two way databinding
// < one way databind
// & function
angular
    .module('app')
    .component('hero', {
        templateUrl: 'app/hero.html',
        bindings: {
            hero: '<'
        },
        controller: function() {
            var vm = this;
            vm.hero = 'This is a new component from Angular 1.5 - SON';
        }
        // template
    });