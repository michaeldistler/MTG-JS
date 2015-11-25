/* Grab cards from deckbrew API */
mtgJS.factory("cardManager", ["$http", function($http) {
    var apiUrl = 'https://api.deckbrew.com/mtg'
    var card = {};
    
    /* Random Query of cards for testing */
    card.get_cards = function(){
        return $http.get(apiUrl + '/' + 'cards?page=2');
    };
    
    /* Get specific card by Multiverse ID (mid) */
    card.get_card = function(mid){
        return $http.get(apiUrl + '/' + 'cards?m=' + mid);
    };
    
    /* Search, needs refined */
    card.search = function(name){
        return $http.get(apiUrl + '/' + 'cards/typeahead?q=' + name);
    };
    return card;
}]);
