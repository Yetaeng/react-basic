import React, { useState, useCallback } from "react";
import styles from "./main.module.css";
import { useNavigate } from "react-router-dom";
import CardList from "../../components/cardList/cardList";
import CardPreviewList from "../../components/cardPreviewList/cardPreviewList";
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useEffect } from 'react';

const Main = ({ auth, FileInput }) => {
    const navigate = useNavigate();
    const [cards, setCards] = useState([]);

    const onLogout = () => {
        auth.logout();
    }

    useEffect(() => {
        auth.onAuthChange(user => {
            if (!user) navigate('/');
        })
    })

    const handleAddCard = useCallback(infos => {
        const card = {
            id: infos.id,
            name: infos.name,
            company: infos.company,
            color: infos.color,
            title: infos.title,
            email: infos.email,
            message: infos.message,
            fileName: infos.fileName,
            fileURL: infos.fileURL,
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
        <section className={styles.main}>
            <Header onLogout={onLogout}/>
            <div className={styles.contents}>
                <div className={styles.cardMaker}>
                    <CardList
                        FileInput={FileInput}
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
            <Footer />
        </section>
    );
};

export default Main;
