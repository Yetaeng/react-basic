import React from 'react';
import VideoList from '../components/video_list';

const Main = ({ youtubeService, videos }) => (
    <VideoList
        youtubeService={youtubeService}
        videos={videos}
    />
);

export default Main;