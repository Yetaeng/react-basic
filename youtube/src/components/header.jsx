import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <img src="/images/logo.png" alt="logo" />
        <a href="#">Youtube</a>
        <form action="submit" className='search-form'>
          <input type="text" className="search-input" placeholder='Search..'/>
          <button className='search-button'>
            <img src="/images/search.png" alt="search" className='search-button-img' />
          </button>
        </form>
      </header>
    );
  }
}

export default Header;