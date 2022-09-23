import React from 'react';
import CardPreviewItem from '../cardPreviewItem/cardPreviewItem';
import styles from './cardPreviewList.module.css';

const CardPreview = ({ cards }) => {
    
    return (
            <>
                <h2 className={styles.title}>Card Preview</h2>
                <ul className={styles.container}>
                {cards.map(card => (
                    <CardPreviewItem key={card.id} card={card}/>
                ))}
                {/* onclick이벤트가 들어오면 정보가 들어가진 CardPreviewItem컴포넌트가 생성된다*/}
                </ul>
            </>
        );
    }

export default CardPreview;