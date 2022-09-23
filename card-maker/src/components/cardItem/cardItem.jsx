import React, { useRef } from "react";
import styles from './cardItem.module.css';

const CardItem = ({ onAddCard }) => {
    let nameRef = useRef();
    let companyRef = useRef();
    let colorRef = useRef();
    let titleRef = useRef();
    let emailRef = useRef();
    let messageRef = useRef();

    const onAdd = (e) => {
        e.preventDefault();
        const infos = {
            name: nameRef.current.value,
            company: companyRef.current.value,
            color: colorRef.current.value,
            title: titleRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,
        }
        onAddCard(infos);
        console.log(colorRef.current);
        nameRef.current.value = ''
        companyRef.current.value = ''
        // colorRef.current.[0];
        titleRef.current.value = ''
        emailRef.current.value = ''
        messageRef.current.value = ''
    }

    return (
        <>
            <form className={styles.cardItem}>
                <div className={styles.row}>
                    <input ref={nameRef} type="text" placeholder='Name' required/>
                    <input ref={companyRef} type="text" placeholder='Company' />
                    <select ref={colorRef} name="color" id="color" >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="colorful">Colorful</option>
                    </select>
                </div>
                <div className={styles.row}>
                    <input ref={titleRef} type="text" placeholder='Title' />
                    <input ref={emailRef} type="text" placeholder='Email' />
                </div>
                <textarea ref={messageRef} name="message" id="message" cols="15" rows="3" placeholder='Message' ></textarea>
                <div className={`${styles.row} ${styles.fileAndBtn}`}>
                    <label>
                        <div className={styles.inputFileLabel}>No File</div>
                        <input type="file" className={styles.inputFile}/>
                    </label>
                    <button type='submit' className={styles.inputBtn} onClick={onAdd}>Add</button>
                </div>
            </form>
        </>
    )
};

export default CardItem;
