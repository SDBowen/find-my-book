import React from "react";
import cover from "../../src/default-book.png";

const Book = props => {
  let {
    volumeInfo: { authors, title, publisher, imageLinks, infoLink }
  } = props.book;

  if (typeof imageLinks == "undefined") {
    imageLinks = {};
    imageLinks.thumbnail = cover;
  }

  return (
    <div className="book-card">
      <div className="book-card__picture">
        <img src={imageLinks.thumbnail} alt="Book Cover" />
      </div>
      <div className="book-card__details">
        <div className="book-card__title">
          <p>
            <b>{title}</b>
          </p>
        </div>
        <div className="book-card__author">
          <p>{authors}</p>
        </div>
        <div className="book-card__publisher">
          <p>{publisher}</p>
        </div>
        <div className="book-card__link">
          <a className="ui primary button" href={infoLink} role="button">
            More Detail
          </a>
        </div>
      </div>
    </div>
  );
};

export default Book;
