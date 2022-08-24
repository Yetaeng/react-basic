import React, { Component } from 'react';

class VideoItem extends Component {
    render() {
        const {title, channelTitle} = this.props.video.snippet;
        const {url} = this.props.video.snippet.thumbnails.medium;

        return (
            <li className='video-item'>
                <img src={url} alt="thumbnail" className="thumbnail" />
                <div className="video-info">
                    <p className="video-title, ellipsis">{title}</p>
                    <span className="channel-name">{channelTitle}</span>
                </div>
            </li>
        );
    }
}

export default VideoItem;