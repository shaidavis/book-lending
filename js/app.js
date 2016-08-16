var app = angular.module("book", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'offer-book.html'
  })
  .state('borrow', {
    url: '/borrow',
    templateUrl: 'about.html'
  })
  .state('home.list', {
    url: '/list',
    templateUrl: 'partial-home-list.html',
    controller: function($scope) {
      $scope.scotches = ['balvenie', 'The Balmore', 'Highland Park'];
    }
  })
  .state('home.paragraph', {
    url: '/paragraph',
    templateUrl: 'partial-about-scotch.html',
  })  

  .state('scotch', {
    url: '/scotch/:scotch',
    templateUrl: function ($stateParams){
      console.log($stateParams)
      return 'partial-scotch-' + $stateParams.scotch + '.html';
    }
  })  
}); 
