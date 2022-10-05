import React from 'react';
import styles from './cardPreviewItem.module.css';

const CardPreviewItem = ({ card }) => {
    const { color, fileURL } = card;

    let colorType;
    if (color === 'light') {
        colorType = styles.light;
    } else if (color === 'dark') {
        colorType = styles.dark;
    } else {
        colorType = styles.colorful;
    }

    return (
        <li className={`${styles.cardPreviewItem} ${colorType}`}>
            <img className={styles.profile} src={fileURL || './images/default_logo.png' } alt="profile_img" />
            <div className={styles.infos_area}>
                <p className={styles.name}>{card.name}</p>
                <p className={styles.company}>{card.company}</p>
                <p>{card.title}</p>
                <p>{card.email}</p>
                <p>{card.message}</p>
            </div>
        </li>
    )
}

export default CardPreviewItem;