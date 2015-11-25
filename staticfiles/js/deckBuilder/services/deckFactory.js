/* Simple Deck Building */
deckBuilder.factory("deckFactory", ["$http", "cardManager", function($http, cardManager) {
    var deck = {};

    deck.cards = [];
    deck.sideboard = [];
    
    deck.add_card = function(mid){
        cardManager.get_card(mid)
            .success(function(new_card){
                deck.cards.push(new_card);
                console.log('New card added to deck: ' + new_card[0].name);
                return deck;
            })
            .error(function(error){
                console.log('New card was not added: ' + error); 
            });
    };
    
    /* Get deck from DB */
    deck.get_deck = function() {
        return $http.get();
    };
    
    /* Save deck to DB */
    deck.save = function() {
        return $http.post();
    };
    
    /* Delete deck from DB */
    deck.delete_deck = function(){
       return $http.delete();
    };
    
    return deck;
}]);
