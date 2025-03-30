
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
  

  function handleSortChange(e) {
    let value = e.target.value;
    if (!value) return;

    let parts = value.split(' ');
    if (parts.length !== 2) {
      console.error("Invalid sorting value:", value);
      return;
    }

    let [criteria, order] = parts;
    dispatch(sortBooks(criteria, order));
  }

  return (
    <div>
      <h1>Books List</h1>

      <div>
      <label htmlFor="sort">Sort By:</label>
      <select id="sort" onChange={handleSortChange}>
        <option value="title asc">Title - Ascending</option>
        <option value="title desc">Title - Descending</option>
        <option value="author asc">Author - Ascending</option>
        <option value="author desc">Author - Descending</option>
        <option value="publisher asc">Publisher - Ascending</option>
        <option value="publisher desc">Publisher - Descending</option>
      </select>

      <label htmlFor="order">Order:</label>
      <select id="order" onChange={handleSortChange}>
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
