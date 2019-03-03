import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="page-nav">
        <header className="section-header">
          <div className="title-box">
            <h1 className="title-box__title">Find My Book!</h1>
          </div>
        </header>

        <nav className="navigation">
          <div className="nav-box">
            <div className="nav-box__links">
              <button className="">Reset</button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
