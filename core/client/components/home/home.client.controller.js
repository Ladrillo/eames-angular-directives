(function () {
    "use strict";

    angular.module('app')
        .controller('homeController', function ($scope) {
            $scope.user1 = {
                name: 'Luke Skywalker',
                address: {
                    street: '4301 Beechnut Ln',
                    city: 'Secret Rebel Base',
                    planet: 'Hoth'
                },
                friends: [
                    'Han',
                    'Leia',
                    'Chewbacca'
                ]
            };
            $scope.user2 = {
                name: 'Han Solo',
                address: {
                    street: 'Amaya 33',
                    city: 'Secret Rebel Base',
                    planet: 'Tatooine'
                },
                friends: [
                    'Luke',
                    'Leia',
                    'Chewbacca'
                ]
            };
            $scope.someString = "I am a string";
            $scope.anotherString = "I am another pretty string!";

            $scope.putaMierda = 10;
            $scope.reducePutaMierda = function () {
                $scope.putaMierda -= 1;
            };
        });


} ());