import "./css/App.css";
import { useState, useEffect } from "react";
import * as MyReadsAPI from "./Utils/BooksAPI";
import { Route, Routes } from "react-router-dom";
import MyReadsView from "./views/MyReadsView";
import SearchView from "./views/SearchView";

const App = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    const getAllBooks = async () => {
      const res = await MyReadsAPI.getAll();
      setAllBooks(res);
    };
    getAllBooks();
  });

  const updateBookShelf = (book, updatedShelf) => {
    MyReadsAPI.update(book, updatedShelf);
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <MyReadsView allBooks={allBooks} updateBookShelf={updateBookShelf} />
        }
      />
      <Route
        path="/search"
        element={
          <SearchView allBooks={allBooks} updateBookShelf={updateBookShelf} />
        }
      />
    </Routes>
  );
};

export default App;
