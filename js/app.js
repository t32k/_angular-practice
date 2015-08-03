'use strict';

angular.module('myApp',['ui.bootstrap'])
    .config(['$tooltipProvider', function($tooltipProvider){
        $tooltipProvider.setTriggers({'customEvent': 'customEvent'});
    }]);

angular.module('myApp').controller('myController', ['$scope','$timeout', '$sce',
    function($scope, $timeout, $sce) {
        $scope.show = function() {
            $timeout(function() {
                $('.tt').trigger('customEvent');
            }, 0);
        };
        $scope.hide = function() {
            $timeout(function() {
                $('.tt').trigger('customEvent');
            }, 1000);
        };

        $scope.htmlTooltip = $sce.trustAsHtml('<div class="tt" tooltip-trigger="customEvent" ng-mouseenter="show()">まだまだ入社したばかりで教えていただくことばかりでありますが、1日でも早く<a href="#">事業に貢献</a>できるように頑張って参ります。歴史に名を刻めるくらいのプロダクトを作りたいです。どうぞよろしくお願いします！</a>');
    }]);