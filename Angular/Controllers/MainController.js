//main controller
main.controller("MainController", ['$scope', '$http', '$rootScope','$uibModal', '$location', function ($scope, $http, $rootScope,modalWindow,$location) {
    var thisScope = $scope;
    $scope.from_city="";
    $scope.to_city="";
    $scope.isTo=false;
    $scope.callingTrack = function() {
      
    //Check whether the AWBNumber is entered or not
    if(isNaN(1234))
    {
        $rootScope.modalInstance = modalWindow.open({
        templateUrl: 'modalOk.html',
        controller: 'ModalWindowController',
        size: 'sm'
      });
    }
    else
    {
      
    }  
  }
  $scope.formatDate = function(date){
      var dateOut = new Date(date);
      return dateOut;
    };
  $rootScope.reset = function()
    {
      $scope.tableList =[];
      $scope.headers =[];
      $scope.awbNumber="";
    }
    $scope.$watch('from_city', function(){
      $scope.isTo=false;
      if($scope.from_city.length>0 && $scope.to_city.length>0)
      {
        if($scope.from_city.toLowerCase() === $scope.to_city.toLowerCase()){
        //$scope.from_city="";
        $rootScope.modalInstance = modalWindow.open({
        templateUrl: 'modalOk.html',
        controller: 'ModalWindowController',
        size: 'sm',
        backdrop: 'static',
        keyboard:false,
        scope: $scope
            });
        }    
      }
    });
    
    $scope.$watch('to_city', function(){
      $scope.isTo=true;
     if($scope.from_city.length>0 && $scope.to_city.length>0)
      {
        if($scope.from_city.toLowerCase() === $scope.to_city.toLowerCase()){
        //$scope.to_city="";
        $rootScope.modalInstance = modalWindow.open({
        templateUrl: 'FromAndToModal.html',
        controller: 'ModalWindowController',
        size: 'sm',
        backdrop: 'static',
        keyboard: false,
        scope: $scope
          });
        }
      }
    }); 
    $scope.resetToFromValue = function(){
      if($scope.isTo){$scope.to_city="";}else{$scope.from_city=""}
    } 
    $scope.gotoCarrierResults = function(){
      //store to and from values
      $rootScope.fromValue = $scope.from_city;
      $rootScope.toValue = $scope.to_city;
      //go to carrier results page
      $location.path('/CarrierResults');
    }

    //Start-Below code is for Become a Carrier
    $rootScope.openBecomeaCarrier = function(){
      //go to become a carrier page
     $location.path('/BecomeCarrier');
    }
    //End-Above code is for Become a Carrier

    
}]);