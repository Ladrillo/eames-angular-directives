(function () {
    "use strict";

    angular.module('app')
        .directive('userInfoCard', function () {
            return {
                restrict: "E",
                templateUrl: "directives/user.info.card.template.html",
                scope: {
                    merde: "=chorraLarga",
                    chof: "@caca",

                },
                controller: function ($scope) {
                    $scope.collapsed = false;
                    $scope.knightMe = function (merde) {
                        merde.rank = 'Knight';
                    };
                    $scope.collapse = function () {
                        $scope.collapsed = !$scope.collapsed;
                    };
                }
            };
        })
        .directive('userAddress', function () {
            return {
                restrict: "E",
                templateUrl: "directives/user.address.template.html",
                scope: true,
                controller: function ($scope) {
                    // $scope.collapsed = false;
                    $scope.collapseAddress = function () {
                        $scope.collapsed = !$scope.collapsed;
                    };
                }


            }
        })


} ());