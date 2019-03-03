import React, { Component } from "react";

class Book extends Component {
  render() {
    return (
      <div className="book-card">
        <div className="book-card__picture">
          <img src="https://via.placeholder.com/150x200" alt="Book Cover" />
        </div>
        <div className="book-card__details">
          <div className="book-card__author">
            <p>Lorem ipsum dolor</p>
          </div>
          <div className="book-card__title">
            <p>Lorem ipsum, dolor consectetur sit amet consectetur</p>
          </div>
          <div className="book-card__publisher">
            <p>amet Lorem ipsum dolor</p>
          </div>
          <div className="book-card__link">
            <a className="" href="https://book" role="button">
              More Detail
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
