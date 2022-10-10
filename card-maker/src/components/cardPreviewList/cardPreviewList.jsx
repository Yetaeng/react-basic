import React from 'react';
import CardPreviewItem from '../cardPreviewItem/cardPreviewItem';
import styles from './cardPreviewList.module.css';

const CardPreview = ({ cards }) => {
    return (
            <section className={styles.preview}>
                <h2 className={styles.title}>Card Preview</h2>
                <ul className={styles.container}>
                {Object.keys(cards).map(key => (
                    <CardPreviewItem key={key} card={cards[key]}/>
                ))}
                </ul>
            </section>
        );
    };

export default CardPreview;