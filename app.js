(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.lunch_list = "";
  $scope.lunch_placeholder = "list comma separated dishes you usually have for lunch";
  $scope.messageColor = "";
  
  $scope.lunchCheck = function () {
    var totalLunchValue = splitMe($scope.lunch_list);
    if(totalLunchValue == 0){
      $scope.lunch_message = "Please enter data first!";
      $scope.messageColor = "fontRed";
    } else {
      if (totalLunchValue > 0 && totalLunchValue <= 3){
        $scope.lunch_message = "Enjoy!";
        $scope.messageColor = "fontGreen";
      } else if (totalLunchValue > 3){
        $scope.lunch_message = "Too much!";
        $scope.messageColor = "fontGreen";
      }
    }
  };


  function splitMe(string) {
    var splitVariable = $scope.lunch_list; 
    if (splitVariable == ""){
      return 0;
    } else {
      var resultVariable = splitVariable.split(",").length;
      return resultVariable;
    }
  }

}

})();
