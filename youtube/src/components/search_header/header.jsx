import React, { memo } from 'react';
import styles from './header.module.css';

const Header = memo(({ onSearch }) => {
  const inputRef = React.createRef(); // 훅에서는 useRef()를 사용해야 계속 memo가 됨

  const onSubmit = (e) => {
    e.preventDefault();
    let query = inputRef.current.value;
    query && onSearch(query);
    // inputRef.current.value = ''; // 유튜브는 검색한 단어가 그대로 남음
  }

  return (
    <header className={styles.header}>
      <a href="http://localhost:3000" className={styles.logo_wrap}>
          <img src="/images/logo.png" alt="logo"/>
          <h1 className={styles.logo_text}>Youtube</h1>
      </a>
      <form action="submit" className={styles.search_form} onSubmit={onSubmit}>
        <input type="text" className={styles.search_input} placeholder='Search..' ref={inputRef}/>
        <button className={styles.search_button}>
          <img src="/images/search.png" alt="search" className={styles.search_button_img} />
        </button>
      </form>
    </header>
  );
});

export default Header;