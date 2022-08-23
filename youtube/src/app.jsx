import React, { useState } from 'react';
import { useEffect } from 'react';
import './app.css';
import Header from './components/header'
import VideoList from './components/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    youtube
      .mostPopular()
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <>
      <Header />
      <VideoList videos={videos} />
    </>
  );
}

export default App;