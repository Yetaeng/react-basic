import React, { useRef, useState } from "react";
import styles from './cardItem.module.css';

const CardItem = ({ onAddCard }) => {
    const [image, setImage] = useState(null);
    let nameRef = useRef();
    let companyRef = useRef();
    let colorRef = useRef();
    let titleRef = useRef();
    let emailRef = useRef();
    let messageRef = useRef();
    let avatarRef = useRef();

    const onAdd = (e) => {
        e.preventDefault();

        const infos = {
            name: nameRef.current.value,
            company: companyRef.current.value,
            color: colorRef.current.value,
            title: titleRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,
            avatar: image ? image : null,
        }
        onAddCard(infos);

        nameRef.current.value = ''
        companyRef.current.value = ''
        colorRef.current.value = 'light'
        titleRef.current.value = ''
        emailRef.current.value = ''
        messageRef.current.value = ''
        avatarRef.current.value = null;
    }

    const uploadToCloudinary = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', `${process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET}`);

        const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload`, {
            method: 'POST',
            body: formData,
        });

        let data;
        try {
            data = await res.json();
        } catch (error) {
            console.error(error);
        }
        return data;
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
                        <input ref={avatarRef} type="file" accept='image/*' className={styles.inputFile} onChange={(e) => {uploadToCloudinary(e.target.files[0]); setImage(e.target.files[0])}}/>
                    </label>
                    <button type='submit' className={styles.inputBtn} onClick={onAdd}>Add</button>
                </div>
            </form>
        </>
    )
};

export default CardItem;
