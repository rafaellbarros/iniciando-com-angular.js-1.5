angular
    .module('app')
    .directive('appDirective', function() {
        return {
            // restrict:
            template: '<h1>My Directive</h1>',
            // bindToController:
            scope: {
                name: '@',
                lastname: '@'
            },
            link: function($scope, $element, $attr){
                console.log($scope);
            }
            // required:
            // link: link
        }
    });