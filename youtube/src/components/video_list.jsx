import React, { useState, useEffect, useCallback } from 'react';
import VideoItem from './video_item';

const VideoList = ({ youtubeService, videos }) => {
    return (
        <ul className='video-list'>
            {videos.map((video) => (
                <VideoItem key={video.id} video={video} />           
            ))}
        </ul>
    )
}

export default VideoList;