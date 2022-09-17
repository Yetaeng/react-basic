import React from 'react';
import CardPreviewItem from '../cardPreviewItem/cardPreviewItem';
import styles from './cardPreviewList.module.css';

const CardPreview = (props) => {
        return (
            <>
                <h2 className={styles.title}>Card Preview</h2>
                <ul className={styles.container}>
                    <CardPreviewItem />
                    <CardPreviewItem />
                </ul>
            </>
        )
    }

export default CardPreview;