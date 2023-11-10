import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as MyReadsAPI from "../Utils/BooksAPI";
import Book from "../Components/Book";

const SearchView = ({ allBooks, updateBookShelf }) => {
  const [query, setQuery] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);

  const updateQuery = (query) => {
    setQuery(query);
  };

  useEffect(() => {
    if (query !== "") {
      const getSearchBooks = async () => {
        const res = await MyReadsAPI.search(query);
        if (res) {
          let tempBookArray = [];
          res.forEach(async (book) => {
            tempBookArray.push(await MyReadsAPI.get(book.id));
          });
          setSearchBooks(tempBookArray);
        }
      };
      getSearchBooks();
    } else {
      const emptyArray = [];
      setSearchBooks(emptyArray);
    }
  }, [query]);

  return (
    <div className="search-book-page">
      <div className="search-books-bar">
        <Link to="/" className="close-search"></Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      {searchBooks.length > 0 ? (
        <div className="search-books-results">
          <ol className="books-grid">
            {searchBooks.map((book) => (
              <li key={book.id}>
                <Book book={book} updateBookShelf={updateBookShelf}></Book>
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SearchView;
