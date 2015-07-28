(function () {
    "use strict";

    angular.module('app')
        .directive('friends', function () {
            return {
                templateUrl: "components/friends/friendsDirective.html",
                restrict: "E",
                scope: {
                    myfriends: "=",
                    mytest: "@",
                },
                // replace: true,
                controller: function ($scope) {
                    $scope.employed = function (friend) {
                        friend.employed = "Recently lost job";

                    };
                    console.log($scope);
                }
            };
        });

} ());