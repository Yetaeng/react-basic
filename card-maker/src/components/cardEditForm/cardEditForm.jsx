import React from 'react';
import styles from './cardEditForm.module.css';

const CardEditForm = ({ card }) => {
    console.log(card);

    return (
        <form className={styles.cardItem}>
        <div className={styles.row}>
            <input type="text" placeholder='Name' defaultValue={card.name} />
            <input type="text" placeholder='Company' defaultValue={card.company} />
            <select name="color" id="color" defaultValue={card.color}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="colorful">Colorful</option>
            </select>
        </div>
        <div className={styles.row}>
        <input type="text" placeholder='Title' defaultValue={card.title} />
        <input type="text" placeholder='Email' defaultValue={card.email} />
        </div>
        <textarea name="message" id="message" cols="15" rows="3" placeholder='Message' defaultValue={card.message} ></textarea>
        <div className={`${styles.row} ${styles.fileAndBtn}`}>
            <label>
                {/* 파일버튼명은 로그인사용자 이름으로 변경하기*/}
                <div className={styles.inputFileLabel}>{card.name}</div>
                <input type="file" className={styles.inputFile}/>
            </label>
            <button className={styles.inputBtn}>Delete</button>
        </div>
    </form>
    )
}

export default CardEditForm;