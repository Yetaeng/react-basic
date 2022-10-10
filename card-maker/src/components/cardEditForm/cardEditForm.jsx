import React from 'react';
import { memo } from 'react';
import styles from './cardEditForm.module.css';

const CardEditForm = memo(({ FileInput, card, onDeleteCard, onUpdate }) => {
    const { name, company, color, title, email, message, fileName } = card;

    const onFileChange = file => {
        onUpdate({
            ...card,
            fileName: file.fileName,
            fileURL: file.fileURL,
        });
    };

    const onChangeCard = e => {
        if (e.currentTarget == null) {
            return;
        }
        e.preventDefault();
        onUpdate({
            ...card,
            [e.currentTarget.name]: e.currentTarget.value
        });
    };

    const onDelete = (e) => {
        e.preventDefault();
        onDeleteCard(card);
    };

    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" placeholder='Name' name='name' value={name} onChange={onChangeCard}/>
            <input className={styles.input} type="text" placeholder='Company' name='company' value={company} onChange={onChangeCard}/>
            <select className={styles.select} name="color" id="color" value={color} onChange={onChangeCard}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="colorful">Colorful</option>
            </select>
            <input className={styles.input} type="text" placeholder='Title' name='title' value={title} onChange={onChangeCard}/>
            <input className={styles.input} type="text" placeholder='Email' name='email' value={email} onChange={onChangeCard}/>
            <textarea className={styles.textarea} name="message" id="message" cols="15" rows="3" placeholder='Message' value={message} onChange={onChangeCard}></textarea>
            <div className={styles.fileInput}>
                <FileInput name={fileName} onFileChange={onFileChange} />
            </div>
            <button type="submit" className={styles.inputBtn} onClick={onDelete}>Delete</button>
        </form>
    )
});

export default CardEditForm;