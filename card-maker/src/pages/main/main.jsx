import React, { useState, useEffect, useCallback, useReducer } from "react";
import styles from "./main.module.css";
import { useNavigate } from "react-router-dom";
import CardList from "../../components/cardList/cardList";
import CardPreviewList from "../../components/cardPreviewList/cardPreviewList";
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import cardReducer from '../../reducer/card-reducer';

const Main = ({ auth, FileInput, cardRepository }) => {
    const navigate = useNavigate();
    const navigateState = useNavigate().state; // 로그인 컴포넌트를 통해 왔다면 값이 있을 거고, 다른 컴포넌트를 통해 왔다면 없음
    const [userId, setUserId] = useState(navigateState && navigateState.id) ;
    const [cards, dispatch] = useReducer(cardReducer, {});

    const onLogout = useCallback(() => {
        auth.logout();
    }, [auth])

    useEffect(() => {
        if (!userId) {
            return;
        }
        const stopSync = cardRepository.syncCards(userId, card => {
            dispatch({ type: 'sync', card });
        });
        return () => stopSync;
    }, [userId, cardRepository])

    useEffect(() => {
        auth.onAuthChange(user => {
            if (user) {
                setUserId(user.uid);
            } else {
                navigate('/');
            } 
        });
    }, [auth, navigate]);

    const createOrUpdateCard = card => {
        dispatch({ type: 'createOrUpdate', card });
        cardRepository.saveCard(userId, card);
    }

    const deleteCard = card => {
        dispatch({ type: 'delete', card });
        cardRepository.removeCard(userId, card);
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
