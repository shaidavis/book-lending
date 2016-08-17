app.factory('bookService', ['$http', function ($http) {

  var searchedBooks = {
    books: []
    };

  var offeredBooks = {
    books : []
  };

  function search(name){
    searchedBooks.books = [];   //empty the search array before rendering the new search
    $http.get('https://www.googleapis.com/books/v1/volumes?q=' + name).success(function (data) {

     //LOOP THROUGH THE DATA RETURNED AND CREATE BOOK OBJECT TO PUSH INTO SEARCHED BOOKS ARRAY
     for (var i=0; i < data.items.length ; i++){
      var book = {
        title:data.items[i].volumeInfo.title,
        image: data.items[i].volumeInfo.imageLinks.thumbnail,
        author: data.items[i].volumeInfo.authors,
        pageNo: data.items[i].volumeInfo.pageCount,
        description: data.items[i].volumeInfo.description,
        language: data.items[i].volumeInfo.language

       }
       searchedBooks.books.push(book);
      }
     // console.log(searchedBooks)
    });
  }

  //CREATES BOOK OBJECT TO BE SENT TO THE DATABASE (IN THE OFFERED BOOKS)//
  function offer(title,image, author, description, pageNo,language ,index){
    var book = {
      title:title,
      image:image,
      author:author,
      description:description,
      pageNo: parseInt(pageNo),
      language: language,
      available: true
    }
   
    $http.post('/offerbook', book);

    // offeredBooks.getAll();    
  }

  function getAll() {
    return $http.get('/books').success(function (data) {
       // console.log("data from server is:",data);
      // var id = ObjectId();
      // console.log(id)
    // this copies the response posts to the client side
    // 'beers' under 'beerService'
    angular.copy(data, offeredBooks.books);        //this tells the data to be copied into our object
  });
    console.log(offeredBooks.books);
  };

  function booking(bookThis){
    //   $http.post('/bookit', {id: bookThis}).success(function(data, status, headers, config) {
    //   getAll();
    // });
    console.log(bookThis);
    }
   
    // $http.post('/offerbook', book);
  

  return {searchedBooks:searchedBooks, search:search, offer:offer, offeredBooks:offeredBooks, getAll:getAll, booking:booking}

}])