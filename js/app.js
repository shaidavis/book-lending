var app = angular.module("book", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/add',
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
    })

});