import React, { Component } from "react";
import "./App.scss";

import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container-main">
          <Header />
          <Search />
          <Results />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
