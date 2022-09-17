import React from 'react';
import styles from './cardPreviewItem.module.css';

const CardPreviewItem = (props) => {

    return (
        <li className={styles.cardPreviewItem}>
            <div className={styles.profile_area}>
                <img src="./images/default_logo.png" alt="profile_img" className={styles.profile}/>
            </div>
            <div className={styles.infos_area}>
                <p className={styles.name}>Yetaeng</p>
                <p>Dream Coding</p>
                <hr />
                <p>Frontend developer</p>
                <p>dreamcoder@gmail.com</p>
                <p>"Don't forget to code my dream"</p>
            </div>
        </li>
    )
}

export default CardPreviewItem;