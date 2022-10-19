import React, { useState, useEffect, useCallback } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/search_header/header';
import Main from './pages/main';
import Search from './pages/search';
import Watch from './pages/watch';

let defaultVideos = JSON.parse(sessionStorage.getItem('defaultVideos')) || [];
function App({ youtubeService }) {
  const [videos, setVideos] = useState(() => 
    JSON.parse(sessionStorage.getItem('videos')) || []
  );
  const [selectedVideo, setSelectedVideo] = useState(() => 
    JSON.parse(sessionStorage.getItem('selectedVideo')) || null
  );
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.setItem('videos', JSON.stringify(videos));
    sessionStorage.setItem('selectedVideo', JSON.stringify(selectedVideo));
    sessionStorage.setItem('defaultVideos', JSON.stringify(defaultVideos));
  }, [videos, selectedVideo])

  const onClickLogo = () => {
    navigate('/');
    setVideos(defaultVideos);
  }

  const handleSearch = useCallback((query) => {
    navigate('/results');
    setSelectedVideo(null);
    youtubeService
    .searchVideo(query)
    .then((videos) => setVideos(videos));
  }, [youtubeService, navigate]);

  const handleSelect = (video) => {
    navigate('/watch');
    setSelectedVideo(video);
  }

  useEffect(() => {
    if (defaultVideos.length === 0) {
        youtubeService
          .mostPopular()
          .then((videos) => {
            setVideos(videos);
            defaultVideos = videos;
          });
      }
    }, [youtubeService]);

  return (
    <div className={styles.app}>
      <Header onSearch={handleSearch} onClickLogo={onClickLogo}/>
      <Routes>
        <Route
          path="/"
          element={<Main videos={videos} onSelect={handleSelect} />}
        ></Route>
        <Route
          path="/results"
          element={
            <Search
              videos={videos}
              onSelect={handleSelect}
            />
          }
        ></Route>
        <Route
          path="/watch"
          element={
            <Watch
              videos={videos}
              onSelect={handleSelect}
              selectedVideo={selectedVideo}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;