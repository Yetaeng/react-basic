import React from "react";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import styles from './login.module.css';

const Login = ({ auth }) => {
    const navigate = useNavigate();

    const onLogin = e => {
        let name = e.target.textContent;
        auth
            .login(name)
            .then(data => { goToMain(data.user.uid) })
    }
    
    const goToMain = (userId) => {
        navigate("/main", {
            state: {
                id: userId,
            }
        })
    }
    
    useEffect(() => {
        auth.onAuthChange(user => {
            user && goToMain(user.uid);
        });
    })

    return (
        <section className={styles.login}>
            <Header />
            <section>
                <h2>Login</h2>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button type='button' className={styles.button} onClick={onLogin}>Google</button>
                    </li>
                    <li className={styles.item}>
                        <button type='button' className={styles.button} onClick={onLogin}>Github</button>
                    </li>
                </ul>
            </section>
            <Footer />
        </section>
    )
};

export default Login;
