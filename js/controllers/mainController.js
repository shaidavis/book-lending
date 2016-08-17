app.controller('mainCtrl', function($scope, $rootScope, bookService, ngDialog){

  //THE GETALL FUNCTION UPDATES THE BOOKS THAT WERE OFFERED BY OTHER USERS AND CAN BE BORROWED. RUNS ON LOAD.//
  // $scope.bookingIndex = undefined;

  bookService.getAll().then(function () {
  $scope.offeredBooks = bookService.offeredBooks.books;
    // console.log($scope.offeredBooks);
  });

  $scope.allBooks = bookService.offeredBooks.books;
  
  
  //SEARCHBOOK FUNCTION SEARCHES THROUGH GOOGLE API DATABASE FOR THE BOOK THE USER WANTS TO OFFER (BORROW OUT)//
  $scope.searchBook = function(){

    bookService.search($scope.bookSearch)

   $scope.books = bookService.searchedBooks.books;
    // });
    $scope.bookSearch="";
  }

  //OFFERBOOK FUNCTION ADDS THE BOOK FROM THE GOOGLE API SEARCH INTO THE OFFERED BOOKS DATABASE SO USERS CAN BORROW THEM//
  $scope.offerBook = function(title,image, author, description, pageNo,language ,index){
    bookService.offer(title,image, author, description, pageNo,language ,index);
  }


  $scope.clickToOpenBorrow = function ($index) {
    $rootScope.bookingIndex = $scope.allBooks[$index]._id;
    ngDialog.open({ template: 'borrowBook.html', className: 'ngdialog-theme-default'});
  }
    

  $scope.bookIt = function(){
    bookService.booking($rootScope.bookingIndex);
    }
  
  });
