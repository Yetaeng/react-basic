import React, { useState, useEffect, useCallback } from 'react';
import './app.css';
import Header from './components/header'
import VideoList from './components/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const handleSearch = useCallback((query) => {
    youtube
      .searchVideo(query)
      .then((videos) => setVideos(videos));
  }, [youtube]);

  useEffect(() => {
    youtube
      .mostPopular()
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <>
      <Header onSearch={handleSearch}/>
      <VideoList videos={videos} />
    </>
  );
}

export default App;