myApp=angular.module('myApp', []);

myApp.controller('myController', function($scope, $http){
  $http.get('people.json').success(function(response){
     $scope.myPeople = response;
  });
});