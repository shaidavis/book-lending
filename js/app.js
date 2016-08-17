var app = angular.module("book", ['ui.router', 'ngDialog']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'offer-book.html'
  })
  .state('offer', {
    url: '/offer',
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
    templateUrl: 'about.html',
  })  


  })  