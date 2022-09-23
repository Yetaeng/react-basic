import React from 'react';
import CardItem from '../cardItem/cardItem';
import CardEditForm from '../cardEditForm/cardEditForm';
import styles from './cardList.module.css';

const CardList = ({ onAddCard, cards, onDeleteCard }) => {

    return (
        <>
        <h2 className={styles.title}>Card Maker</h2>
        {cards.map(card => (
            <CardEditForm key={card.id} card={card} onDeleteCard={onDeleteCard}/>
        ))}
        <CardItem onAddCard={onAddCard} />
        </>
    );
};

export default CardList;