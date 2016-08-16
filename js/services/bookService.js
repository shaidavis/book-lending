app.factory('bookService', ['$http', function ($http) {

  //CONNECT THROUGH $HTTP TO THE API TO IMPLEMENT THE SEARCH FUNCTION FOR THE FORM//
  //THE POPULATE THE SEARCHEDBOOOKS ARRAY THAT WILL BE DISPLAYED FOR THE USER TO ADD HIS BOOKS//

  var searchedBooks = [];

  function searchBook(name){
    $http.get('https://www.googleapis.com/books/v1/volumes?q=isbn:' + name).success(function (data) {
       console.log("data from server is:",data);


     // angular.copy(data, searchedBooks);        //this tells the data to be copied into our array

     console.log(data);
    });
  }

  return {searchedBooks:searchedBooks}
}])