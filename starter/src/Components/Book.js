const Book = ({ book, updateBookShelf }) => {
  const backgroundImgUrl = book.imageLinks
    ? book.imageLinks.smallThumbnail
    : "";

  const shelfValue = book.shelf ? book.shelf : "none";

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: "url(" + backgroundImgUrl + ")",
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            defaultValue={shelfValue}
            onChange={(event) => updateBookShelf(book, event.target.value)}
          >
            <option value="moveTo" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      {book.authors ? (
        book.authors.map((author) => (
          <div key={author} className="book-authors">
            {author}
          </div>
        ))
      ) : (
        <div key="N/A" className="book-authors">
          N/A
        </div>
      )}
    </div>
  );
};

export default Book;
