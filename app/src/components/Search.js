import React, { Component } from "react";

class Search extends Component {
  state = {
    searchQuery: ""
  };

  handleInputChange = e => {
    this.setState({
      searchQuery: e.target.value
    });
  };

  render() {
    return (
      <section class="section-search">
        <div class="search-box">
          <input
            type="text"
            name="search"
            placeholder="Enter a Book Title"
            class="search-box__input"
            value={this.state.searchQuery}
            onChange={this.handleInputChange}
          />
        </div>
      </section>
    );
  }
}

export default Search;
