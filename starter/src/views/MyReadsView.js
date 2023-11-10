import { Link } from "react-router-dom";
import "../css/App.css";
import Shelf from "../Components/Shelf";

const MyReadsView = ({ allBooks, updateBookShelf }) => {
  let crBooks = allBooks.filter((book) => book.shelf === "currentlyReading");
  let wtrBooks = allBooks.filter((book) => book.shelf === "wantToRead");
  let rBooks = allBooks.filter((book) => book.shelf === "read");

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              shelfName={"Currently Reading"}
              books={crBooks}
              updateBookShelf={updateBookShelf}
            ></Shelf>
            <Shelf
              shelfName={"Want to Read"}
              books={wtrBooks}
              updateBookShelf={updateBookShelf}
            ></Shelf>
            <Shelf
              shelfName={"Read"}
              books={rBooks}
              updateBookShelf={updateBookShelf}
            ></Shelf>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  );
};

export default MyReadsView;
