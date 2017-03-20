/**
 * Main AngularJS Web Application
 */
var app = angular.module('URLMinifier', ['ngRoute', 'ngResource']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {templateUrl: "partials/home.html", controller: "DefaultCtrl"})

    // errors
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "DefaultCtrl"});

    $locationProvider.html5Mode({enabled: true, requireBase: false});
}]);
