import React from 'react';
import CardPreviewItem from '../cardPreviewItem/cardPreviewItem';
import styles from './cardPreviewList.module.css';

const CardPreview = ({ cards }) => {
    return (
            <section className={styles.preview}>
                <h2 className={styles.title}>Card Preview</h2>
                <ul className={styles.container}>
                {cards.map(card => (
                    <CardPreviewItem key={card.id} card={card}/>
                ))}
                </ul>
            </section>
        );
    }

export default CardPreview;