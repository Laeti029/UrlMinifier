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

app.controller('DefaultCtrl', ['dateUtilsService', function (dateUtilsService, $location, $http) {

    let vm = this;
}]);

app.controller('HeaderCtrl', ['$location', function ($location, $http) {
	let vm = this;
	vm.application = {"titre":"URLMinifier","version":"1.0.0","date":"20/03/2017"};	
}]);

app.directive('headerDirective', function() {
  return {
    restrict: 'E',
    controller: 'HeaderCtrl',    
    templateUrl: 'templates/header.html'
  };
});
app.service("dateUtilsService", [
    function() {

        this.getDateAndTimeWithPattern = function () {            
            moment.locale();         // fr
            result = moment().format('LLL');  // 27 février 2017 15:18

            return result; 
        };
    }
]);