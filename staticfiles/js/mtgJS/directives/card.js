mtgJS.directive("card", function(){
    return {
        restrict: 'E',
        template: '<div id="card{{$index}}" class="card col-md-2" ng-class="class" ng-click="tap()">{{ card.name }}</div>',
        link: function(scope , element){}
    }
});
