app.controller('mainCtrl', function($scope, $rootScope, bookService, ngDialog){

  //THE GETALL FUNCTION UPDATES THE BOOKS THAT WERE OFFERED BY OTHER USERS AND CAN BE BORROWED. RUNS ON LOAD.//
  // $scope.bookingIndex = undefined;
  $scope.submitted=false;
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

    $rootScope.title = title;
    $rootScope.image = image;
    $rootScope.author = author;
    $rootScope.description = description;
    $rootScope.pageNo = pageNo;
    $rootScope.language = language;
    $rootScope.offerIndex = index;
     ngDialog.open({ template: 'offerBookSuccess.html', className: 'ngdialog-theme-default'});
  }

  $scope.offerIt = function(){
  // $rootScope.lenderEmail = $scope.lenderEmail;
  $scope.submitted=true;
  bookService.offer($rootScope.title,$rootScope.image, $rootScope.author, $rootScope.description, $rootScope.ageNo,$rootScope.anguage ,$rootScope.index, $scope.lenderEmail);
  }
  


  $scope.clickToOpenBorrow = function ($index) {
    $rootScope.bookingIndex = $scope.allBooks[$index]._id;
    ngDialog.open({ template: 'borrowBook.html', className: 'ngdialog-theme-default'});
  }
    

  $scope.bookIt = function(){
    bookService.booking($rootScope.bookingIndex);
    }



    
  
  });
