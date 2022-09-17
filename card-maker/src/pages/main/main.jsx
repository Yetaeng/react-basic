import React from "react";
import styles from './main.module.css';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import CardList from '../../components/cardList/cardList';
import CardPreviewList from '../../components/cardPreviewList/cardPreviewList';

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
            <header className={styles.header}>
                <div className={styles.innerHeader}>
                    <img className={styles.logo} src="./images/logo.png" alt="logo" />
                    <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
                </div>
                <h1 className={styles.title}>Business Card Maker</h1>
            </header>
            <div className={styles.contents}>
                <div className={styles.cardMaker}>
                    <CardList />
                </div>
                <div className={styles.cardPreview}>
                    <CardPreviewList />
                </div>
            </div>
        </>
    )
};

export default Main;
