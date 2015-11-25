mtgJS.directive("library", function(){
    return {
        restrict: "E",
        template: "<div class='col-md-8 library col-centered' ng-click='draw()'><img src='img/Magic_Card_Back.png' class='img-responsive'></div>",
    }
});
