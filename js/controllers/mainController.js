app.controller('mainCtrl', function($scope, bookService){

  $scope.allBooks = bookService.allBooks; //ADD A GETALL FUNCTION HERE FOR THE MONGO//
  
  // console.log($scope.searchedBooks)

  $scope.searchBook = function(){

    bookService.search($scope.bookSearch)
    // .then(function(){
    //   console.log("hi mom")
   $scope.books = bookService.searchedBooks.books;
    // });
    // console.log($scope.books)
    $scope.bookSearch="";
  }


  $scope.offerBook = function(title,image, author, description, pageNo,language ,index){
    console.log(title,image, author, description, pageNo,language ,index);
  }


  });
