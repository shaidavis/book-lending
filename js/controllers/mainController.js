app.controller('mainCtrl', function($scope, bookService){

  $scope.allBooks = bookService.allBooks; //ADD A GETALL FUNCTION HERE FOR THE MONGO//
  
  // console.log($scope.searchedBooks)

  $scope.searchBook = function(){
    bookService.search($scope.bookSearch).then(function(){
   $scope.books = bookService.searchedBooks.books;
    });

    $scope.bookSearch="";
  }



  });
