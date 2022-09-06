import React from 'react';
import VideoList from '../components/video_list/video_list';

const Search = ({ youtubeService, videos, onSelect }) => (
    <VideoList
        youtubeService={youtubeService}
        videos={videos}
        onSelect={onSelect}
    />
    );

export default Search;