import React from 'react';
import CardItem from '../cardItem/cardItem';
import styles from './cardList.module.css';

const CardList = (props) => {
        return (
            <>
                <h2 className={styles.title}>Card Maker</h2>
                <CardItem />
                <CardItem />
                <CardItem />
            </>
        )
    }

export default CardList;