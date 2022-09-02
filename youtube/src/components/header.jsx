import React, { memo } from 'react';

const Header = memo(({ onSearch }) => {
  const inputRef = React.createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    let query = inputRef.current.value;
    query && onSearch(query);
    // inputRef.current.value = ''; // 유튜브는 검색한 단어가 그대로 남음
  }

  return (
    <header className='header'>
      <h1>
      {/* change to <Link> */}
        <a href="http://localhost:3000" className='logo-wrap'>
            <img src="/images/logo.png" alt="logo"/>
            <span className="logo-text">Youtube</span>
        </a>
      </h1>
      <form action="submit" className='search-form' onSubmit={onSubmit}>
        <input type="text" className="search-input" placeholder='Search..' ref={inputRef}/>
        <button className='search-button'>
          <img src="/images/search.png" alt="search" className='search-button-img' />
        </button>
      </form>
    </header>
  );
});

export default Header;