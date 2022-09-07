import React, { memo } from 'react';
import styles from './video_item.module.css';

const he = require('he');

const VideoItem = memo(({ video, video: {snippet}, onSelect, display }) => {
    const videoId = video.id;
    const displayType = display === 'list' ? styles.list : styles.grid;
    const decodedTitle = he.decode(snippet.title); // 한글깨짐 현상 방지

    return (
        <li
            id={videoId}
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