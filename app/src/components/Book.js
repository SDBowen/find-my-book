import React from "react";

const Book = props => {
  let {
    volumeInfo: { authors, title, publisher, imageLinks, infoLink }
  } = props.book;

  if (typeof imageLinks == "undefined") {
    imageLinks = {};
    imageLinks.thumbnail = "/src/default-book.png";
  }

  return (
    <div className="book-card">
      <div className="book-card__picture">
        <img src={imageLinks.thumbnail} alt="Book Cover" />
      </div>
      <div className="book-card__details">
        <div className="book-card__author">
          <p>{authors}</p>
        </div>
        <div className="book-card__title">
          <p>{title}</p>
        </div>
        <div className="book-card__publisher">
          <p>{publisher}</p>
        </div>
        <div className="book-card__link">
          <a className="" href={infoLink} role="button">
            More Detail
          </a>
        </div>
      </div>
    </div>
  );
};

export default Book;
