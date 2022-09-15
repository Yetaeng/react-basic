import React from "react";
import styles from './main.module.css';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Main = props => {
    const navigate = useNavigate();

    const handleLogout = () => {
        const logout = getAuth()
    
        signOut(logout).then(() => {
            console.log('logout');
            navigate('/login')
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <img className={styles.logo} src="./images/logo.png" alt="logo" />
            <h1 className={styles.title}>Card Maker Page</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
};

export default Main;
