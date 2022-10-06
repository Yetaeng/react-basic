import React from 'react';
import CardItem from '../cardItem/cardItem';
import CardEditForm from '../cardEditForm/cardEditForm';
import styles from './cardList.module.css';

const CardList = ({ FileInput, onAddCard, cards, onDeleteCard, onUpdate }) => {
    return (
      <section className={styles.editor}>
        <h2 className={styles.title}>Card Maker</h2>
            {Object.keys(cards).map(key => (
                <CardEditForm
                    key={key}
                    FileInput={FileInput}
                    card={cards[key]}
                    onDeleteCard={onDeleteCard}
                    onUpdate={onUpdate}
                />
        ))}
        <CardItem FileInput={FileInput} onAddCard={onAddCard} />
      </section>
    );
};

export default CardList;