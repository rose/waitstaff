;(function() {
  angular.module("waitCalculator", [])
  .controller("waitCtrl", function($scope) {
    var resetCharges = function() { $scope.subtotal = $scope.tip = $scope.total_meal = 0; }
    var resetCalc = function() { $scope.base = $scope.tax_percent = $scope.tip_percent = ""; }
    var resetEarnings = function() { $scope.total_tip = $scope.meal_count = $scope.avg_tip = 0; }

    var init = function() { resetCharges(); resetEarnings(); }
    $scope.resetTwo = function() { resetCalc(); resetCharges(); }
    $scope.resetAll = function() { resetCharges(); resetCalc(); resetEarnings(); }

    init();

    $scope.myParseFloat = function(str) {
      var float_regex = /^(0|[1-9]\d*)(\.\d{1,2})?$/
      var match = parseFloat(str.match(float_regex));
      if (match != match) return false;
      return match
    }
      
    $scope.pay = function(isValid) {
      if (isValid) {
        var base = $scope.myParseFloat($scope.base);
        var tax_percent = $scope.myParseFloat($scope.tax_percent);
        var tip_percent = $scope.myParseFloat($scope.tip_percent);
        if (base !== false && tax_percent !== false && tip_percent !== false) {
          $scope.subtotal = base * (1 + tax_percent/100);
          $scope.tip = $scope.subtotal * tip_percent/100;
          $scope.total_meal = $scope.subtotal + $scope.tip;
          $scope.total_tip += $scope.tip;
          $scope.meal_count += 1;
          $scope.avg_tip = $scope.total_tip / $scope.meal_count;
        } else resetCharges();
      } else resetCharges();
    }
  });
})();
