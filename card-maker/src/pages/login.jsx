import React from "react";
import styles from './login.module.css';

const Login = props => {
    return (
        <div className={styles.container}>
            <img src="../../public/images/logo.png" alt="logo" />
            <h1 className={styles.title}>Business Card Maker</h1>
            <div className={styles.loginArea}>
                <h2>Login</h2>
                <button className={styles.loginBtn}>Google</button>
                <button className={styles.loginBtn}>Github</button>
            </div>
            <p className={styles.footer}>Code your dream</p>
        </div>
    )
};

export default Login;
