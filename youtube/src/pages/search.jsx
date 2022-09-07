import React from 'react';
import VideoList from '../components/video_list/video_list';

const Search = ({ videos, onSelect }) => (
    <VideoList
        videos={videos}
        onSelect={onSelect}
    />
    );

export default Search;