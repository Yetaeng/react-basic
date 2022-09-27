import React from 'react';
import styles from './cardPreviewItem.module.css';

const CardPreviewItem = ({ card }) => {
    let colorType;
    if (card.color === 'light') {
        colorType = styles.light;
    } else if (card.color === 'dark') {
        colorType = styles.dark;
    } else {
        colorType = styles.colorful;
    }

    let avatar = card.avatar ? URL.createObjectURL(card.avatar) : './images/default_logo.png';

    return (
        <li className={`${styles.cardPreviewItem} ${colorType}`}>
            <div className={styles.profile_area}>
                <img src={avatar} alt="profile_img" className={styles.profile}/>
            </div>
            <div className={styles.infos_area}>
                <p className={styles.name}>{card.name}</p>
                <p>{card.company}</p>
                <hr />
                <p>{card.title}</p>
                <p>{card.email}</p>
                <p>{card.message}</p>
            </div>
        </li>
    )
}

export default CardPreviewItem;