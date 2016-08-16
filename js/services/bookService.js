app.factory('bookService', ['$http', function ($http) {

  //CONNECT THROUGH $HTTP TO THE API TO IMPLEMENT THE SEARCH FUNCTION FOR THE FORM//
  //THE POPULATE THE SEARCHEDBOOOKS ARRAY THAT WILL BE DISPLAYED FOR THE USER TO ADD HIS BOOKS//

  var searchedBooks = [];


  function search(name){

    $http.get('https://www.googleapis.com/books/v1/volumes?q=' + name).success(function (data) {
    // console.log("data from server is:",data)

    // console.log(data);

     //LOOP THROUGH THE DATA RETURNED AND CREATE BOOK OBJECT TO PUSH INTO SEARCHED BOOKS ARRAY
     for (var i=0; i < data.items.length ; i++){
      var book = {
        title:data.items[i].volumeInfo.title,
        image: data.items[i].volumeInfo.imageLinks.thumbnail,
        author: data.items[i].volumeInfo.authors[0],
        pageNo: data.items[i].volumeInfo.pageCount,
        description: data.items[i].volumeInfo.description,
        language: data.items[i].volumeInfo.language,
       }
       searchedBooks.push(book);
      }
     // console.log(searchedBooks)
    });
  }

  return {searchedBooks:searchedBooks, search:search}

}])