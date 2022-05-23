import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './navbar.css';

function Navbar() {
  let navigate = useNavigate();
  const [searchWord, setSearchWord] = useState('');
  const trySearch = () => {
    navigate(`/search?word=${searchWord}`);
  };
  const goMain = () => {
    navigate(`/`);
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      trySearch();
    }
  };
  return (
    <nav className="navbar">
      <h2 className="navbar-heading" onClick={goMain}>
        youtube
      </h2>
      <div className="navbar-search">
        <input
          className="navbar-search__input"
          type="text"
          placeholder="search"
          onChange={(e) => setSearchWord(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="navbar-search__btn" onClick={trySearch}>
          검색
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
