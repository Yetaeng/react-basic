import React, { useState } from 'react';
import ImageInput from '../imageInput/imageInput';
import styles from './cardEditForm.module.css';

const CardEditForm = ({ card, onDeleteCard, onUpdate, uploader }) => {
    const [image, setImage] = useState(null);
    
    const onDelete = () => {
        onDeleteCard(card);
    }

    const onChangeCard = e => {
        onUpdate(card.id, e.target.name, e.target.value);
    }

    const onChangeAvatar = e => {
        setImage(e.target.files[0]);
        uploader.uploadImage(e.target.files[0]);
        onUpdate(card.id, 'avatar', e.target.files[0]);
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
            <ImageInput avatar={card.avatar} image={image} onChange={onChangeAvatar}/>
            <button className={styles.inputBtn} onClick={onDelete}>Delete</button>
        </div>
    </form>
    )
}

export default CardEditForm;