import React from 'react';
import styles from './cardEditForm.module.css';

const CardEditForm = ({ card, onDeleteCard, onUpdate }) => {

    const onDelete = () => {
        onDeleteCard(card);
    }

    const onChangeCard = e => {
        onUpdate(card.id, e.target.name, e.target.value);
    }

    return (
        <form className={styles.cardItem}>
        <div className={styles.row}>
            <input type="text" placeholder='Name' name='name' defaultValue={card.name} onChange={onChangeCard}/>
            <input type="text" placeholder='Company' name='company' defaultValue={card.company} onChange={onChangeCard}/>
            <select name="color" id="color" defaultValue={card.color} onChange={onChangeCard}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="colorful">Colorful</option>
            </select>
        </div>
        <div className={styles.row}>
        <input type="text" placeholder='Title' name='title' defaultValue={card.title} onChange={onChangeCard}/>
        <input type="text" placeholder='Email' name='email' defaultValue={card.email} onChange={onChangeCard}/>
        </div>
        <textarea name="message" id="message" cols="15" rows="3" placeholder='Message' defaultValue={card.message} onChange={onChangeCard}></textarea>
        <div className={`${styles.row} ${styles.fileAndBtn}`}>
            <label>
                {/* 파일버튼명은 로그인사용자 이름으로 변경하기... 파일명으로인가?*/}
                <div className={styles.inputFileLabel}>No file</div>
                <input type="file" className={styles.inputFile}/>
            </label>
            <button className={styles.inputBtn} onClick={onDelete}>Delete</button>
        </div>
    </form>
    )
}

export default CardEditForm;