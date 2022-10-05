import React from 'react';
import styles from './header.module.css';

// 로그인이 되어 있다면 로그아웃을 할 수 있도록 콜백함수를 받아옴
const Header = ({ onLogout }) => (
      <header className={styles.header}>
        {onLogout && <button className={styles.logout} onClick={onLogout}>Logout</button>}
        <img className={styles.logo} src="./images/logo.png" alt="logo" />
        <h1 className={styles.title}>Business Card Maker</h1>
      </header>
  );

export default Header;