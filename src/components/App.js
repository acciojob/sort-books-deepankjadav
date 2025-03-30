
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchBooks, fetchData, sortBooks} from "./redux/actions";
import './../styles/App.css';

const App = () => {
  let dispatch = useDispatch();
  let { books, loading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
    dispatch(sortBooks('title', 'asc'));
  }, [dispatch]);
  
  let handleSortChange = (e) => {
    let criteria = e.target.value;
    dispatch(sortBooks(criteria, 'asc'));
  };
  
  let handleOrderChange = (e) => {
    let order = e.target.value;
    dispatch(sortBooks('title', order));
  };
  

  return (
    <div>
      <h1>Books List</h1>

      <div>
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" onChange={handleSortChange}>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="publisher">Publisher</option>
      </select>

      <label htmlFor="order">Order:</label>
      <select id="order" onChange={handleOrderChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>


      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>ISBN</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{book.isbn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
