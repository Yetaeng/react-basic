import React from 'react';
import VideoDetail from '../components/video_detail/video_detail';
import VideoList from '../components/video_list/video_list';
import styles from './watch.module.css';

const Watch = ({ videos, onSelect, selectedVideo }) => {
    const filteredVideos = videos.filter((item) => item !== selectedVideo);

    return (
        <section className={styles.container}>
            <div className={styles.detail}>
                <VideoDetail selectedVideo={selectedVideo}/>
            </div>
            <div className={styles.list}>
                <VideoList videos={filteredVideos} onSelect={onSelect} display={selectedVideo ? 'list' : 'grid'}/>
            </div>
        </section>
)};

export default Watch;