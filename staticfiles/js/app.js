var mtgJS = angular.module('mtgJS', ['counterApp', 'deckBuilder', 'ui.router']);
var counterApp = angular.module('counterApp', []);
var deckBuilder = angular.module('deckBuilder', []);

mtgJS.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/login');
    
    $stateProvider
   
        .state('login', {
            url: '/login',
            templateUrl: 'templates/user/login.html'
        })

        .state('register', {
            url: '/register',
            templateUrl: 'templates/user/register.html'
        })
        
        // Deck Building Links
        .state('deck', {
            url: '/list',
            templateUrl: 'templates/deckBuilder/deck.html'
        })
        
        .state('editDeck', {
            url: '/list',
            templateUrl: 'templates/deckBuilder/edit-deck.html',
            controller: 'deckBuildCtrl'
        })
        
        .state('newDeck', {
            url: '/list',
            templateUrl: 'templates/deckBuilder/new-deck.html',
            controller: 'gameSetup'
        })
        
        .state('search', {
            url: '/search',
            templateUrl: 'templates/deckBuilder/searchCard.html',
        })
        
        // Game Setup and Related Links
        .state('gameSetup', {
            url: '/game',
            templateUrl: 'templates/mtgJS/game-setup.html',
            controller: 'gameSetup' 
        })

        .state('play', {
            url: '/play',
            templateUrl: 'templates/mtgJS/board.html'
        });
        
});
