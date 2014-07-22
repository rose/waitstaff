;(function() {
  angular.module("waitCalculator", [])
  .controller("waitCtrl", function($scope) {
    $scope.subtotal = 0;
    $scope.tip = 0;
    $scope.total_meal = 0;

    $scope.pay = function(isValid) {
      if (isValid) {
        var base = parseFloat($scope.base);
        var tax_percent = parseInt($scope.tax_percent);
        var tip_percent = parseInt($scope.tip_percent);
        if (base === base && tax_percent === tax_percent && tip_percent === tip_percent) {
          $scope.subtotal = base * (1 + tax_percent/100);
          $scope.tip = $scope.subtotal * tip_percent/100;
          $scope.total_meal = $scope.subtotal + $scope.tip;
        }       
      } else {
        $scope.subtotal = $scope.tip = $scope.total_meal = 0;
      }
    }
  });
})();
