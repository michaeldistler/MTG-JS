deckBuilder.controller("deckBuildCtrl", ["$http","$scope", "cardManager", "deckFactory", function($http, $scope, cardManager, deckFactory){
    $scope.deck = deckFactory.cards;
    $scope.search_card = "Search Cards"
    $scope.search = function() {
       cardManager.search($scope.search_card)
           .success(function (cards) {
               search_result = cards; 
               $scope.search_result = search_result;
           })
           .error(function(error) {
               $scope.search_result = 'Unable to retrieve cards: ' + error; 
           });
    };
    
    /* Area for potential additions to deck */
    $scope.holding_area = [];
       
    /* Add card from deckbrew API using deck.add_card()add_card*/
    $scope.add_card = function(index){
         cards = $scope.search_result;
         mv_id = cards[index].editions[0].multiverse_id;
         deckFactory.add_card(mv_id);
    };
}]);
