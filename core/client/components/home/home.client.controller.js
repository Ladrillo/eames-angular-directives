(function () {
    "use strict";

    angular.module('app')
        .controller('homeController', function ($scope) {
            $scope.user = {
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
        });


} ());