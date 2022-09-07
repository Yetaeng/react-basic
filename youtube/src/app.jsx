import React, { useState, useEffect, useCallback } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/search_header/header';
import Main from './pages/main';
import Search from './pages/search';
import Watch from './pages/watch';

function App({ youtubeService }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const navigate = useNavigate();

  // 수정 필요
  const onClickLogo = () => {
    navigate('/');
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
    youtubeService
      .mostPopular()
      .then((videos) => {
        setVideos(videos);
      })
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