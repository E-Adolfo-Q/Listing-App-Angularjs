angular.module('listing.module',['listing.services','listing.filters'])
.controller('listingCtrl',['$scope','data','$rootScope',function ($scope,data,$rootScope){
  $scope.title="Noticia Tecnológica";
  $scope.setData = function(data){     
     $scope.articles = data.articles;
     console.log($scope.articles);  
  }

  data.get('scripts/data/articles.js',$scope.setData);
  $scope.viewLimit = 4;
  $scope.viewMore = function(num){
    $scope.viewLimit += num;
  }	
  $scope.descending = true;
  $scope.filters = {
    query:"",
    tags:[
      {
       label:"tag1",
       selected:false

      },
      {
      label:"tag2",
      selected:false        
      },
      {
       label:"tag3",
       selected:false	
      },
      {
      	label:"tag4",
      	selected:false
      },
      {
      	label:"tag5",
      	selected:false
      }
     ]
   }
}])

.controller('testCtrl', ['$scope','data','$rootScope', function ($scope,data,$rootScope) {  
  $scope.dataFromRoot = $rootScope.testvalue;
}])

.run(['$rootScope',function ($rootScope){
  $rootScope.testvalue = "rootScope";
}]);  

