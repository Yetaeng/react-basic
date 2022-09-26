import React from 'react';
import CardItem from '../cardItem/cardItem';
import CardEditForm from '../cardEditForm/cardEditForm';
import styles from './cardList.module.css';

const CardList = ({ onAddCard, cards, onDeleteCard, onUpdate }) => {
    return (
      <>
        <h2 className={styles.title}>Card Maker</h2>
            {cards.map(card => (
                <CardEditForm
                    key={card.id}
                    card={card}
                    onDeleteCard={onDeleteCard}
                    onUpdate={onUpdate}
                />
        ))}
        <CardItem onAddCard={onAddCard} />
      </>
    );
};

export default CardList;