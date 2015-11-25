mtgJS.controller('mainCtrl', ['$scope', 'dieFactory', 'deck', function($scope, dieFactory, deck) {
    $scope.dieRoll = function() {
        $scope.roll_result = dieFactory.roll();
    }; 
    $scope.class = "";
    $scope.deck = deck.cards;
    $scope.draw = function() {
    var drawn_card = $scope.deck[Math.floor(Math.random()*$scope.deck.length)];
    $scope.hand.cards.push(drawn_card)
    index = $scope.deck.indexOf(drawn_card);
    $scope.deck.splice(index, 1);
    return drawn_card;
    };
    $scope.hand = {
        cards: []
    };
    $scope.tap = function(){
        if ($scope.class === "")
            $scope.class = "tapped";
         else
            $scope.class = "";
    };
}]);

