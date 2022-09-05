import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({ videos, onSelect }) => {
    return (
        <ul className={styles.video_list}>
            {videos.map((video) => (
                <VideoItem key={video.id} video={video} onSelect={onSelect}/>           
            ))}
        </ul>
    )
}

export default VideoList;