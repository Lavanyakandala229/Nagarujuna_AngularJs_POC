var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$window){
    $scope.submit=function()
    {
      var user=$scope.username;
      var pass=$scope.password;
      if(user != null && pass != null){
        $window.location.href = 'tableData.html'
      }
      else{
          alert("Enter User name and password");
      }
    }
});