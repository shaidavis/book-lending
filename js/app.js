var app = angular.module("book", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'offer-book.html',
    controller: 'mainCtrl'
  })
  .state('borrow', {
    url: '/borrow',
    templateUrl: 'book-display.html',
    controller: 'mainCtrl'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'about.html'    
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
