app.directive('headerDirective', function() {
  return {
    restrict: 'E',
    controller: 'HeaderCtrl',    
    templateUrl: 'templates/header.html'
  };
});