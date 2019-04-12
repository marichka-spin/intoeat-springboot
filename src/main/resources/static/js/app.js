var app = angular.module('intoeat-app', ['ngRoute', 'ngResource', 'ngUpload']);
app.config(['$routeProvider', function($routeProvide){
    $routeProvide.
        when('/', {
            templateUrl: 'templates/places.html',
            controller: 'places-ctrl'
        })
        .when('/places', {
            templateUrl: 'templates/places.html',
            controller: 'places-ctrl'
        })
        .when('/places/:placeId', {
            templateUrl: 'templates/place.html',
            controller: 'place-ctrl'
        })
        .when('/tags', {
            templateUrl: 'templates/tags.html',
            controller: 'tags-ctrl'
        })
        .when('/tags/:tagId', {
            templateUrl: 'templates/tag.html',
            controller: 'tag-ctrl'
        })
        .when('/groups', {
            templateUrl: 'templates/groups.html',
            controller: 'groups-ctrl'
        })
        .when('/groups/:groupId', {
            templateUrl: 'templates/group.html',
            controller: 'group-ctrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

app.factory('Place', ['$resource', function($resource){
    return $resource('admin/place/:path', {
        path: '@path',
        id: '@placeId',
        arg: '@arg'
    });
}]);

app.factory('Tag', ['$resource', function($resource){
    return $resource('admin/tag/:path', {
        path: '@path',
        id: '@tagId',
        name: '@name'
    });
}]);

app.factory('Group', ['$resource', function($resource){
    return $resource('admin/group/:path', {
        path: '@path',
        id: '@groupId'
    });
}]);
