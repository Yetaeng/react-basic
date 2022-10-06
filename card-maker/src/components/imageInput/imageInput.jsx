import React, { useRef } from 'react';
import { useState } from 'react';
import styles from './imageInput.module.css';

const ImageInput = ({ name, uploader, onFileChange }) => {
    const inputRef = useRef();
    const [loading, setLoading] = useState(false);

    const onBtnClick = (e) => {
        e.preventDefault();
        inputRef.current.click();
    }

    const onChange = async e => {
        setLoading(true);
        const uploaded = await uploader.uploadImage(e.target.files[0]);
        setLoading(false);
        onFileChange({
            fileName: uploaded.original_filename,
            fileURL: uploaded.url,
        });
    }

    return (
        <div className={styles.container}>
            <input
                ref={inputRef}
                className={styles.inputFile}
                type="file"
                accept="image/*"
                name='file'
                onChange={onChange}
            />
            {!loading && (
                <button className={`${styles.button} ${name ? styles.pink : styles.grey}`} type="button" onClick={onBtnClick}>{name || 'No file'}</button>
            )}
            {loading && <div className={styles.loading}></div>}
        </div>
    );
}

export default ImageInput;