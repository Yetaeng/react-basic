import React, { useState } from "react";
import styles from "./main.module.css";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import CardList from "../../components/cardList/cardList";
import CardPreviewList from "../../components/cardPreviewList/cardPreviewList";
import { useCallback } from "react";
import { useEffect } from "react";

const Main = () => {
    const navigate = useNavigate();
    const [cards, setCards] = useState([]);

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [color, setColor] = useState("");
    const [title, setTitle] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("")

    const handleLogout = () => {
        const logout = getAuth();
        signOut(logout)
        .then(() => {
            navigate("/login");
        })
        .catch(error => {
            console.log(error);
        });
    };

    const handleAddCard = useCallback(infos => {
        const card = {
            id: Date.now(),
            name: infos.name,
            company: infos.company,
            color: infos.color,
            title: infos.title,
            email: infos.email,
            message: infos.message,
        }
        setCards([...cards, card]);
        console.log(cards);
    }, [cards])

    return (
        <>
            <header className={styles.header}>
            <div className={styles.innerHeader}>
                <img className={styles.logo} src="./images/logo.png" alt="logo" />
                <button onClick={handleLogout} className={styles.logoutBtn}>
                Logout
                </button>
            </div>
            <h1 className={styles.title}>Business Card Maker</h1>
            </header>
            <div className={styles.contents}>
            <div className={styles.cardMaker}>
                <CardList onAddCard={handleAddCard} cards={cards}/>
            </div>
            <div className={styles.cardPreview}>
                <CardPreviewList cards={cards}/>
            </div>
            </div>
            <footer className={styles.footer}>Code your dream</footer>
        </>
    );
};

export default Main;
