import React, { Component } from "react";

class Search extends Component {
  state = {
    searchQuery: ""
  };

  handleInputChange = e => {
    this.setState(
      {
        searchQuery: e.target.value
      },
      () => {
        if (this.state.searchQuery !== "") {
          this.props.onChange(this.state.searchQuery);
        }
      }
    );
  };

  render() {
    return (
      <section className="section-search">
        <div className="search-box">
          <input
            type="text"
            name="search"
            placeholder="Enter a Book Title"
            className="search-box__input"
            onChange={this.handleInputChange}
            value={this.state.searchQuery}
          />
        </div>
      </section>
    );
  }
}

export default Search;
