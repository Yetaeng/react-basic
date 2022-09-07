import React, { memo } from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

const Header = memo(({ onSearch, onClickLogo }) => {
  const inputRef = React.useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    let query = inputRef.current.value;
    query && onSearch(query);
    // inputRef.current.value = ''; // 유튜브는 검색한 단어가 그대로 남음
  }

  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.logo_wrap} onClick={() => onClickLogo()}>
          <img src="/images/logo.png" alt="logo" />
          <h1 className={styles.logo_text}>Youtube</h1>
        </div>
      </Link>
      <form action="submit" className={styles.search_form} onSubmit={onSubmit}>
        <input
          type="text"
          className={styles.search_input}
          placeholder="Search.."
          ref={inputRef}
        />
        <button className={styles.search_button}>
          <img
            src="/images/search.png"
            alt="search"
            className={styles.search_button_img}
          />
        </button>
      </form>
    </header>
  );
});

export default Header;