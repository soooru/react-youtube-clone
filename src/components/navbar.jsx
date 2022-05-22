import React, { PureComponent } from 'react';
import './navbar.css';

class Navbar extends PureComponent {
  inputRef = React.createRef();
  trySearch = () => {
    const word = this.inputRef.current.value;
    console.log('trySearch', word);
  };
  render() {
    return (
      <nav className="navbar">
        <h2 className="navbar-heading">youtube</h2>
        <div className="navbar-search">
          <input
            ref={this.inputRef}
            className="navbar-search__input"
            type="text"
            placeholder="search"
          />
          <button className="navbar-search__btn" onClick={this.trySearch}>
            검색
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
