app.controller('mainCtrl', function($scope, bookService){

  //THE GETALL FUNCTION UPDATES THE BOOKS THAT WERE OFFERED BY OTHER USERS AND CAN BE BORROWED. RUNS ON LOAD.//

  bookService.getAll().then(function () {
  $scope.offeredBooks = bookService.offeredBooks.books;
    console.log($scope.offeredBooks);
  });

  $scope.allBooks = bookService.offeredBooks.books;
  
  
  //SEARCHBOOK FUNCTION SEARCHES THROUGH GOOGLE API DATABASE FOR THE BOOK THE USER WANTS TO OFFER (BORROW OUT)//
  $scope.searchBook = function(){

    bookService.search($scope.bookSearch)
    // .then(function(){
    //   console.log("hi mom")
   $scope.books = bookService.searchedBooks.books;
    // });
    $scope.bookSearch="";
  }

  //OFFERBOOK FUNCTION ADDS THE BOOK FROM THE GOOGLE API SEARCH INTO THE OFFERED BOOKS DATABASE SO USERS CAN BORROW THEM//
  $scope.offerBook = function(title,image, author, description, pageNo,language ,index){
    bookService.offer(title,image, author, description, pageNo,language ,index);
  }


  });
