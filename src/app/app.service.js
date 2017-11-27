angular
.module('app')
.service('MathService', function(MathFactory) {
    
    this.sumService = MathFactory.sum;
    this.subService = MathFactory.sub;
    
    this.sumService2 = function(num1,num2) {
        return MathFactory.sum(num1,num2);
    }

    this.subService2 = function(num1,num2) {
        return MathFactory.sub(num1,num2);
    }

});