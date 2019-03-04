import React from "react";
import Book from "./Book";

const Results = props => {
  let books = {};

  if (typeof props.books == "undefined") {
    books = <p className="no-results">No results</p>;
  } else {
    books = props.books.map(book => {
      return <Book key={book.id} book={book} />;
    });
  }

  return (
    <section className="section-results">
      <div className="book-results">{books}</div>
    </section>
  );
};

export default Results;
