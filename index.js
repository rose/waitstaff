;(function() {
  angular.module("waitCalculator", [])
  .controller("waitCtrl", function($scope) {
    $scope.subtotal = 0;
    $scope.tip = 0;
    $scope.total_meal = 0;
    $scope.submitted = false;

    $scope.myParseFloat = function(str) {
      var float_regex = /^(0|[1-9]\d*)(\.\d{1,2})?$/
      var match = parseFloat(str.match(float_regex));
      if (match != match) return false;
      return match
    }
      
    var resetCalc = function() {
      $scope.subtotal = $scope.tip = $scope.total_meal = 0;
    }

    $scope.resetTwo = function() {
      resetCalc();
      $scope.base = $scope.tax_percent = $scope.tip_percent = "";
    }

    $scope.pay = function(isValid) {
    $scope.submitted = true;
      if (isValid) {
        var base = $scope.myParseFloat($scope.base);
        var tax_percent = $scope.myParseFloat($scope.tax_percent);
        var tip_percent = $scope.myParseFloat($scope.tip_percent);
        if (base === base && tax_percent === tax_percent && tip_percent === tip_percent) {
          $scope.subtotal = base * (1 + tax_percent/100);
          $scope.tip = $scope.subtotal * tip_percent/100;
          $scope.total_meal = $scope.subtotal + $scope.tip;
        } else resetCalc();
      } else resetCalc();
    }
  });
})();
