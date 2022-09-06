import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ selectedVideo, selectedVideo: { snippet } }) => {
    return (
        <>
            <iframe
                className={styles.video}
                type="text/html"
                title="youtube video"
                width="100%"
                height="500px"
                src={`https://www.youtube.com/embed/${selectedVideo.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <h2>{snippet.title}</h2>
            <h3>{snippet.channelTitle}</h3>
            <pre className={styles.description}>{snippet.description}</pre>
        </>
    );
}

export default VideoDetail;