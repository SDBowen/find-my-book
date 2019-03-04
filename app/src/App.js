import React, { Component } from "react";
import axios from "axios";
import "./App.scss";

import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    books: []
  };

  onSearchInput = async term => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${term}`
    );

    this.setState({ books: response.data.items });
  };

  render() {
    return (
      <div className="App">
        <div className="container-main">
          <Header />
          <Search onChange={this.onSearchInput} />
          <Results books={this.state.books} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
