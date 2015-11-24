var lbsOfCO2PerGallonOfGas = 19.64;
var tonsPerYear = function (mpg, milesDriven) {
  if (!milesDriven) {
    milesDriven = 12400;
  }

  return (+milesDriven / +mpg) * lbsOfCO2PerGallonOfGas / 2000.0
}

var breakEven = function(mpg1, mpg2, milesDriven) {
  if (!milesDriven) {
    milesDriven = 12400;
  }

  return 7.0 / ( tonsPerYear(mpg1, milesDriven) - tonsPerYear(mpg2, milesDriven) );
}

angular.module('myApp', []).controller('myCtl', ['$scope', function($scope) {
  $scope.breakEven = breakEven;
  $scope.tonsPerYear = tonsPerYear;
}]);
