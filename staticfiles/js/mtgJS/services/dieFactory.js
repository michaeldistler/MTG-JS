mtgJS.factory('dieFactory', function() {
    var sides = 20;
    var roll_result = {};

    roll_result.roll = function(){
        result = Math.floor(Math.random() * sides); 
        return result;
    }
    return roll_result;
});

