import React, { useState, memo, useRef } from 'react';
import domToImage from 'dom-to-image';
import { saveAs } from 'file-saver';
import styles from './cardPreviewItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const CardPreviewItem = memo(({ card }) => {
    const { name, company, color, title, email, message, fileURL } = card;
    const [isHover, setIsHover] = useState(false);
    const cardRef = useRef();
    const downloadRef = useRef();

    const onDownload = () => {
        const dom = cardRef.current;
        const filter = (dom) => {
            return dom.tagName !== "svg";
        }

        domToImage.toBlob(dom, { filter }).then((blob) => saveAs(blob, `${name}_${company}.png`));
    };
    
    return (
        <li className={styles.wrap} >
            <div ref={cardRef} className={`${styles.cardPreviewItem} ${getStyles(color)}`} onMouseEnter={()=>{setIsHover(true)}} onMouseLeave={()=>{setIsHover(false)}}>
                <img className={styles.profile} src={fileURL || './images/default_logo.png' } alt="profile_img" />
                <div className={styles.infos_area}>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.company}>{company}</p>
                    <p>{title}</p>
                    <p>{email}</p>
                    <p>{message}</p>
                </div>
                {isHover && <FontAwesomeIcon className={styles.download} ref={downloadRef} icon={faDownload} onClick={onDownload}/>}
            </div>
        </li>
    );
}, (prevProps, nextProps) => JSON.stringify(prevProps) === JSON.stringify(nextProps)); // memo 안먹히던거 해결

function getStyles(color) {
    switch (color) {
        case 'dark':
            return styles.dark
        case 'light':
            return styles.light
        case 'colorful':
            return styles.colorful
        default:
            throw new Error(`Unknown color: ${color}`)
    };
};

export default CardPreviewItem;