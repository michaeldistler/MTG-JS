counterApp.controller('counterController', ['$scope', 'counterFactory', function ($scope, counterFactory) {
    $scope.hp = counterFactory.get_hp();
    $scope.red_counter = counterFactory.get_red_counter();
    $scope.increment_hp = function() {
        $scope.hp = counterFactory.increment_hp();
    }
    $scope.decrement_hp = function() {
        $scope.hp = counterFactory.decrement_hp(); 
    }
    $scope.increment_red = function() {
        $scope.red_counter = counterFactory.increment_red();
    }
    $scope.decrement_red = function() {
        $scope.red_counter = counterFactory.decrement_red(); 
    }
}]);

counterApp.factory('counterFactory', function(){
    var hp = 20;
    var red_counter = 0;
    var yellow_counter = 0;
    var black_counter = 0;
    var white_counter = 0;

    var increments = {};

    increments.get_hp = function() {
        return hp;
    }

    increments.get_red_counter = function() {
        return red_counter; 
    }

    increments.increment_hp = function(){
        hp = hp + 1; 
        return hp;
    }
    increments.decrement_hp = function(){
        hp = hp - 1; 
        return hp;
    }

    increments.increment_red = function(){
        red_counter = red_counter + 1; 
        return red_counter;
    }
    increments.decrement_red = function(){
        red_counter = red_counter - 1; 
        return red_counter;
    }
    return increments;
});
