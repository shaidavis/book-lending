var app = angular.module("book", ['ui.router', 'ngDialog']);

app.filter('unique', function() {
   return function(collection, keyname) {
      var output = [], 
          keys = [];

      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });
      return output;
   };
});

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/offer');

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