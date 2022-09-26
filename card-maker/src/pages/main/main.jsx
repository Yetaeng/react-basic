import React, { useState } from "react";
import styles from "./main.module.css";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import CardList from "../../components/cardList/cardList";
import CardPreviewList from "../../components/cardPreviewList/cardPreviewList";
import { useCallback } from "react";

const Main = () => {
    const navigate = useNavigate();
    const [cards, setCards] = useState([]);

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
    }, [cards])

    const handleDelete = card => {
        const filteredCards = cards.filter(item => item.id !== card.id);
        setCards(filteredCards);
    }

    const handleUpdate = useCallback((id, prop, value) => {
        const card = cards.find(item => item.id === id);
        if (card) {
            card[prop] = value;
        }
        const updatedCards = cards.map(item => {
            return item.id === id ? item=card : item;
        });

        setCards([...updatedCards]);
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
                <CardList
                    cards={cards}
                    onAddCard={handleAddCard}
                    onDeleteCard={handleDelete}
                    onUpdate={handleUpdate}
                />
            </div>
        <div className={styles.cardPreview}>
            <CardPreviewList cards={cards} />
        </div>
        </div>
        <footer className={styles.footer}>Code your dream</footer>
        </>
    );
};

export default Main;
