mtgJS.directive("turnPhases", function(){
    return {
        restrict: "E",
        template: "<div ng-repeat='phase in phases' ng-click='select(phase)' ><button ng-class='{active: isActive(phase)}' class='btn btn-block btn-primary pass-btn phase-button'>{{ phase }}</button></div><button class='no-gutter btn btn-block btn-primary pass-btn phase-toggle' ng-click='phaseToggle()'>Next Phase</button>",
        link: function(scope) {
            var phases = [
                "First Main",
                "Combat Begin",
                "Declare Attackers",
                "Declare Blockers",
                "Combat Damage",
                "End Combat",
                "Second Main",
                "End Step",
            ];
            
            scope.phases = phases;
            scope.select= function(item) {
                scope.selected = item; 
                console.log(scope.selected);
            };

            scope.isActive = function(item) {
                return scope.selected === item;
            };
            
            scope.phaseToggle = function() {
                index = phases.indexOf(scope.selected);
                next_index = index + 1;
                if (next_index > 7) {
                    next_index = 0;
                };
                scope.select(phases[next_index]);
            };
            
        }
    }
});
