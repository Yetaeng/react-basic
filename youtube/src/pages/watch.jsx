import React from 'react';
import VideoDetail from '../components/video_detail/video_detail';
import VideoList from '../components/video_list/video_list';
import styles from './watch.module.css';

const Watch = ({ youtubeService, videos, selectedVideo }) => (
    <section className={styles.container}>
        <div className={styles.detatil}>
            <VideoDetail selectedVideo={selectedVideo}/>
        </div>
        <div className={styles.list}>
            <VideoList youtubeService={youtubeService} videos={videos} />
        </div>
    </section>
);

export default Watch;