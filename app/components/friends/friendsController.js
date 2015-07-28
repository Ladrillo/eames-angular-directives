(function () {
    "use strict";

    angular.module('app')
        .controller('friendsController', function ($scope, $routeParams) {
            $scope.test = "test";
            $scope.brothers = [
                {
                    name: "Gabriel",
                    age: 37,
                    address: {
                        street: "4301 Beechnut Ln",
                        city: "Durham",
                        country: "USA"
                    }
                },
                {
                    name: "Alex",
                    age: 35,
                    address: {
                        street: "4301 Beechnut Ln",
                        city: "Durham",
                        country: "USA"
                    }
                }];
            $scope.sisters = [
                {
                    name: "Kristina",
                    age: 30,
                    address: {
                        street: "4301 Beechnut Ln",
                        city: "Durham",
                        country: "USA"
                    }
                },
                {
                    name: "Mariajo",
                    age: 35,
                    address: {
                        street: "Estella 8",
                        city: "Pamplona",
                        country: "España"
                    }
                }];
            console.log($scope);
        });

} ());