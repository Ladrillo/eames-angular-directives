(function () {
    "use strict";

    angular.module('app')
        .directive('userInfoCard', function () {
            return {
                restrict: "E",
                scope: {
                    a: "="
                },
                templateUrl: "directives/user.info.card.template.html",
                controller: function ($scope) {
                    $scope.knightMe = function (user) {
                        user.rank = 'Knight';
                    };
                }
            };
        });


} ());