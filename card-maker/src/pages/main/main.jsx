import React, { useState, useEffect } from "react";
import styles from "./main.module.css";
import { useNavigate } from "react-router-dom";
import CardList from "../../components/cardList/cardList";
import CardPreviewList from "../../components/cardPreviewList/cardPreviewList";
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const Main = ({ auth, FileInput }) => {
    const navigate = useNavigate();
    const [cards, setCards] = useState({}); // 성능을 위해 배열보다 오브젝트로 관리함

    const onLogout = () => {
        auth.logout();
    }

    useEffect(() => {
        auth.onAuthChange(user => {
            if (!user) navigate('/');
        })
    })

    const createOrUpdateCard = card => {
        setCards(cards => {
            const updated = { ...cards };
            updated[card.id] = card;
            return updated;
        });
    }

    const deleteCard = card => {
        setCards(cards => {
            const updated = { ...cards };
            delete updated[card.id];
            return updated;
        });
    }

    return (
        <section className={styles.main}>
            <Header onLogout={onLogout}/>
            <div className={styles.contents}>
                <CardList
                    FileInput={FileInput}
                    cards={cards}
                    onAddCard={createOrUpdateCard}
                    onDeleteCard={deleteCard}
                    onUpdate={createOrUpdateCard}
                />
                <CardPreviewList cards={cards} />
            </div>
            <Footer />
        </section>
    );
};

export default Main;
