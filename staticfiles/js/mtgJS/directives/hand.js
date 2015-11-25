mtgJS.directive("hand", function(){
    return {
        restrict: 'E',
        template: '<div id="hand" ng-repeat="card in hand.cards"><card></card></div><br>',
        link: function(scope , element){}
    }
});
