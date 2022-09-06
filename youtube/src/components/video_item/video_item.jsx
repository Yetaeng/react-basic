import React, { memo } from 'react';
import styles from './video_item.module.css';

const he = require('he');

const VideoItem = memo(({ video, video: {snippet}, onSelect, display }) => {
    const liRef = React.createRef();
    const videoId = video.id;
    const displayType = display === 'list' ? styles.list : styles.grid;
    const decodedTitle = he.decode(snippet.title); // 한글깨짐 현상 방지
    
    // app 컴포넌트에서 handleSelect 함수가 useCallback을 사용하지 않음(임시)
    // const handleSelectVideo = () => {
    //     let selectedId = liRef.current.id;
    //     selectedId && onSelect(video);
    // }

    return (
        <li
            id={videoId}
            ref={liRef}
            className={`${styles.container} ${displayType}`}
            onClick={() => onSelect(video)}
        >
            <div className={styles.video_item}>
            <img
                src={snippet.thumbnails.medium.url}
                alt="thumbnail"
                className={styles.thumbnail}
            />
            <div className={styles.video_info}>
            <p className={`${styles.video_title} ${styles.ellipsis}`}>{decodedTitle}</p>
                <span className={styles.channel_name}>{snippet.channelTitle}</span>
            </div>
            </div>
        </li>
    );
});

export default VideoItem;