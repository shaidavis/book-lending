app.controller('mainCtrl', function($scope, $rootScope, bookService, ngDialog){

  //FOR THE NG-SHOW IN SUBMITTING A NEW BOOK AND BOOKING ONE//
  $scope.submitted=false;
  $scope.booked = false;


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
  $scope.offerBook = function(title,image, author, description, pageNo,language ,index, category){

    $rootScope.title = title;
    $rootScope.image = image;
    $rootScope.author = author;
    $rootScope.description = description;
    $rootScope.pageNo = pageNo;
    $rootScope.language = language;
    $rootScope.offerIndex = index;
    $rootScope.category = category;
     ngDialog.open({ template: 'offerBookSuccess.html', className: 'ngdialog-theme-default'});
  }

  //OFFERING A NEW BOOK - CALL THE BOOKSERVICE WITH THE SEARCHED BOOK'S PROPERTIES AND LENDER'S EMAIL//
  $scope.offerIt = function(){
  $scope.submitted=true;
  bookService.offer($rootScope.title,$rootScope.image, $rootScope.author, $rootScope.description, $rootScope.pageNo,$rootScope.language ,$rootScope.offerIndex, $scope.lenderEmail, $rootScope.category);
  console.log($rootScope.title,$rootScope.image, $rootScope.author, $rootScope.description, $rootScope.pageNo,$rootScope.language ,$rootScope.offerIndex, $scope.lenderEmail)
  }
  

  //OPENS THE POPUP WINDOW WHEN CLICK BORROW A BOOK//
  $scope.clickToOpenBorrow = function ($index) {
    $rootScope.bookingIndex = $scope.allBooks[$index]._id;
    $rootScope.bookingLenderEmail = $scope.allBooks[$index].lenderEmail;
    ngDialog.open({ template: 'borrowBook.html', className: 'ngdialog-theme-default'});
  }
    

  $scope.bookIt = function(){
    $scope.booked = true;
    bookService.booking($rootScope.bookingIndex);
    
    }



    
  
  });
