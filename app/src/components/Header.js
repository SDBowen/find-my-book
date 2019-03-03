import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div class="page-nav">
        <header class="section-header">
          <div class="title-box">
            <h1 class="title-box__title">Find My Book!</h1>
          </div>
        </header>

        <nav class="navigation">
          <div class="nav-box">
            <div class="nav-box__links">
              <button class="btn btn-primary">Reset</button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
