
'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngMessages',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/', {
        controller:'',
        templateUrl:'/view1/view1.html'
      })

      .when('/view2/',{
        controller:'myController',
        templateUrl: '/view2/view2.html'

      })

      .otherwise( {redirectTo: '/'});

}]);

