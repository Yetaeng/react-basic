import React from 'react';
import VideoList from '../components/video_list';

const Search = ({ youtubeService, videos }) => (
    <VideoList
        youtubeService={youtubeService}
        videos={videos}
    />
    );

export default Search;