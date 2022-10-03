import React from 'react';
import CardItem from '../cardItem/cardItem';
import CardEditForm from '../cardEditForm/cardEditForm';
import styles from './cardList.module.css';

const CardList = ({ FileInput, onAddCard, cards, onDeleteCard, onUpdate }) => {
    return (
      <>
        <h2 className={styles.title}>Card Maker</h2>
            {cards.map(card => (
                <CardEditForm
                    key={card.id}
                    FileInput={FileInput}
                    card={card}
                    onDeleteCard={onDeleteCard}
                    onUpdate={onUpdate}
                />
        ))}
        <CardItem FileInput={FileInput} onAddCard={onAddCard} />
      </>
    );
};

export default CardList;