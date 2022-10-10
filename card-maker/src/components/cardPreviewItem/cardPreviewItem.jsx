import React, { memo } from 'react';
import styles from './cardPreviewItem.module.css';

const CardPreviewItem = memo(({ card }) => {
    const { name, company, color, title, email, message, fileURL } = card;
    
    return (
        <li className={`${styles.cardPreviewItem} ${getStyles(color)}`}>
            <img className={styles.profile} src={fileURL || './images/default_logo.png' } alt="profile_img" />
            <div className={styles.infos_area}>
                <p className={styles.name}>{name}</p>
                <p className={styles.company}>{company}</p>
                <p>{title}</p>
                <p>{email}</p>
                <p>{message}</p>
            </div>
        </li>
    );
}, (prevProps, nextProps) => JSON.stringify(prevProps) === JSON.stringify(nextProps)); // memo 안먹히던거 해결

function getStyles(color) {
    switch (color) {
        case 'dark':
            return styles.dark
        case 'light':
            return styles.light
        case 'colorful':
            return styles.colorful
        default:
            throw new Error(`Unknown color: ${color}`)
    };
};

export default CardPreviewItem;