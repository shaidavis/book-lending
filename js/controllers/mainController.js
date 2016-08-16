app.controller('MainCtrl', function($scope, bookService){


  $scope.allBooks = bookService.allBooks; //ADD A GETALL FUNCTION HERE FOR THE MONGO//
  $scope.searchedBooks = searchedBooks;

  $scope.searchBook = function(){
    bookService.searchBook($scope.book-search)
  }
  });