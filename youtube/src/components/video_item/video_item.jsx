import React, { memo } from 'react';
import styles from './video_item.module.css';

const VideoItem = memo(({ video, video: {snippet}, onSelect }) => {
    const liRef = React.createRef();
    const videoId = video.id;
    
    const handleSelectVideo = () => {
        let selectedId = liRef.current.id;
        selectedId && onSelect(video);
    }

    return (
            <li id={videoId} className={styles.video_item} ref={liRef} onClick={handleSelectVideo} >
                <img src={snippet.thumbnails.medium.url} alt="thumbnail" className={styles.thumbnail} />
                <div className={styles.video_info}>
                    <p className={styles.video_title}>{snippet.title}</p>
                    <span className={styles.channel_name}>{snippet.channelTitle}</span>
                </div>
            </li>
    )
});

export default VideoItem;