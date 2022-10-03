import React, { useRef } from 'react';
import styles from './imageInput.module.css';

const ImageInput = ({ name, uploader, onFileChange }) => {
    const inputRef = useRef();

    const onBtnClick = (e) => {
        e.preventDefault();
        inputRef.current.click();
    }

    const onChange = async e => {
        const uploaded = await uploader.uploadImage(e.target.files[0])
        onFileChange({
            fileName: uploaded.original_filename,
            fileURL: uploaded.url,
        });
    }

    return (
        <div className='container'>
            <input
                ref={inputRef}
                className={styles.inputFile}
                type="file"
                accept="image/*"
                name='file'
                onChange={onChange}
            />
            <button className={`${styles.button} ${name ? styles.pink : styles.grey}`} onClick={onBtnClick}>{name || 'No file'}</button>
        </div>
    );
}

export default ImageInput;