;(function() {
  angular.module("waitCalculator", [])
  .controller("waitCtrl", function($scope) {
    $scope.subtotal = 50;
    $scope.tip = 20;
    $scope.total_meal = 70;
  });
})();
