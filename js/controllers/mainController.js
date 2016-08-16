app.controller('MainCtrl', function($scope, bookService){


  $scope.allBooks = bookService.allBooks; //ADD A GETALL FUNCTION HERE FOR THE MONGO//
  $scope.searchedBooks = bookService.searchedBooks;

  $scope.searchBook = function(){
    bookService.search($scope.bookSearch);
    $scope.bookSearch="";
  }
  });