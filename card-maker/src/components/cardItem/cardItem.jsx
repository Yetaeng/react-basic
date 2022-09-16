import React from "react";
import styles from './cardItem.module.css';

const CardItem = props => {

    return (
        <form className={styles.cardItem}>
            <div className={styles.row}>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Company'/>
                <select name="color" id="color">
                    <option value="dark">Light</option>
                    <option value="light">Dark</option>
                    <option value="colorful">Colorful</option>
                </select>
            </div>
            <div className={styles.row}>
                <input type="text" placeholder='Title' />
                <input type="text" placeholder='Email' />
            </div>
            <textarea name="message" id="message" cols="15" rows="3" placeholder='Message'></textarea>
            <div className={`${styles.row} ${styles.fileAndBtn}`}>
                <label>
                    <div className={styles.inputFileLabel}>No File</div>
                    <input type="file" className={styles.inputFile}/>
                </label>
                <button type='submit' className={styles.inputBtn}>Add</button>
            </div>
        </form>
    )
};

export default CardItem;
