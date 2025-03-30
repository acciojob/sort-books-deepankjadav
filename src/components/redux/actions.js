import booksData from '../bookdata.json';
import 'regenerator-runtime/runtime';


export let fetchBooks =() => async (dispatch) => {
    dispatch({ type: "FETCH_BOOKS_REQUEST" });
    try {
        let response = await fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=YOUR_API_KEY');
        let data = await response.json();
            let books = data.results.books.map(book => ({
                title: book.title,
                author: book.author,
                publisher: book.publisher,
                isbn: book.primary_isbn13,
            }));
            dispatch({ type: "FETCH_BOOKS_SUCCESS", payload: books });
        } catch (error) {
            dispatch({ type: "FETCH_BOOKS_FAILURE", payload: "Error fetching books" });
        }

        /*try {
            let books = booksData.map(book => ({
              title: book.title,
              author: book.author,
              publisher: book.publisher,
              isbn: book.isbn,
            }));
            dispatch({ type: "FETCH_BOOKS_SUCCESS", payload: books });
          } catch (error) {
            dispatch({ type: "FETCH_BOOKS_FAILURE", payload: "Error fetching books" });
          }*/
}

export let sortBooks = (criteria, order) => ({
    type: 'SORT_BOOKS',
    payload: { criteria, order },
  });