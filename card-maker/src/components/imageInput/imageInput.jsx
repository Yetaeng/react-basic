import React from 'react';
import styles from './imageInput.module.css';

const ImageInput = ({ avatar, image, onChange }) => {
    // 코드 개선 필요
    let filename;
    if (avatar) {
        filename = avatar.name;
    } else if (image) {
        filename = image.name;
    }   

    return (
        <>
        <label>
        <div className={styles.inputFileLabel}>{filename ? filename : 'No File'}</div>
        <input
            type="file"
            accept="image/*"
            className={styles.inputFile}
            onChange={onChange}
        />
        </label>
        </>
    );
}

export default ImageInput;