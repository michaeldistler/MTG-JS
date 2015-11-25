// Gather game data (Player 1, Player 2, Decks for both)
// in scopes before game creation -- Game Setup
mtgJS.controller('gameSetup', ["deck", "user", "$scope", function(deck, user, $scope){
    $scope.game_creator = user.users[0];
    $scope.decks = deck.decks;
  //  $scope.deck_selection = deck.get_deck();
  //  $scope.deck_list = deck.get_deck_list('requesting user'); 
}]);

mtgJS.factory('gameFactory', [function(){
    // Need at least one player and a deck for a game.
    var players = [];
    var game = {};
    var create_game = function(){
        this.player1 = get_game_creator();
    };
    
    game.create_game = function() {};
    
    // Get Player information - Username, Deck, etc.
    game.set_player = function() {};
    game.set_deck = function() {};
  
}]);

// factory for testing 
mtgJS.factory('user', [function(){
    return {
      "users": [
        {
          "username":"hempz",
          "id": 1
        },
        {
          "username":"Akira",
          "id": 2
        }
      ]
    };
}]);

mtgJS.factory('deck', [function(){
    return {
      "decks": [
        {
          "name":"Blue Control",
          "cards": [
            {"card_name": "vamp", "id": 1},
            {"card_name": "slip snake", "id": 2}
            ]
        },
        {
          "name":"Red Aggro",
          "cards": [
            {"card_name": "Gob Len", "id": 1},
            {"card_name": "Dragon Puff", "id": 2}
            ]
        }
      ]
    };
}]);
