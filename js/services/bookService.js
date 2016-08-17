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
     console.log(data)
     for (var i=0; i < data.items.length ; i++){
      var book = {
        title:data.items[i].volumeInfo.title,
        image: data.items[i].volumeInfo.imageLinks.thumbnail,
        author: data.items[i].volumeInfo.authors[0].toString(),
        pageNo: data.items[i].volumeInfo.pageCount,
        description: data.items[i].volumeInfo.description,
        language: data.items[i].volumeInfo.language,
        category: data.items[i].volumeInfo.categories[0]
       }
       searchedBooks.books.push(book);
      }
      console.log(searchedBooks.books)
    });
  }

  //CREATES BOOK OBJECT TO BE SENT TO THE DATABASE (IN THE OFFERED BOOKS)//
  function offer(title,image, author, description, pageNo,language ,index, lenderEmail, category){
    var book = {
      title:title,
      image:image,
      author:author,
      description:description,
      pageNo: parseInt(pageNo),
      language: language,
      available: true,
      lenderEmail: lenderEmail,
      category: category
    }
   
    $http.post('/offerbook', book).success(function(data, status, headers, config) {
      getAll();
    });
  
  }

  function getAll() {
    return $http.get('/books').success(function (data) {
       // console.log("data from server is:",data);
    angular.copy(data, offeredBooks.books);       
  });
  };


  //UPON HITTING SUBMIT IN THE BORROW BOOK POPUP MAKE THE AVAILABILITY FALSE//s
  function booking(bookThis){
    $http.post('/booking',{id: bookThis}).success(function(data, status, headers, config) {
      getAll();
    });


  }
   

  

  return {searchedBooks:searchedBooks, 
          search:search, 
          offer:offer, 
          offeredBooks:offeredBooks, 
          getAll:getAll, 
          booking:booking}

}])