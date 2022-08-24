import React, { Component } from 'react';
import VideoItem from './video_item';

class VideoList extends Component {
    render() {

        return (
            <ul className='video-list'>
                {this.props.videos.map((video) => (
                    <VideoItem key={video.id} video={video}/>           
                ))}
            </ul>
        );
    }
}

export default VideoList;