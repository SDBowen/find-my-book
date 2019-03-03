import React, { Component } from "react";

class Book extends Component {
  render() {
    return (
      <div class="book-card">
        <div class="book-card__picture">
          <img src="https://via.placeholder.com/150x200" alt="Book Cover" />
        </div>
        <div class="book-card__details">
          <div class="book-card__author">
            <p>Lorem ipsum dolor</p>
          </div>
          <div class="book-card__title">
            <p>Lorem ipsum, dolor consectetur sit amet consectetur</p>
          </div>
          <div class="book-card__publisher">
            <p>amet Lorem ipsum dolor</p>
          </div>
          <div class="book-card__link">
            <a class="btn btn-primary" href="#" role="button">
              More Detail
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
