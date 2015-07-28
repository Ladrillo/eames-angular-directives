(function () {
    "use strict";

    angular.module('app')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/',
                    {
                        templateUrl: 'components/friends/friendsTemplate.html',
                        controller: 'friendsController'
                    });
        });


} ());