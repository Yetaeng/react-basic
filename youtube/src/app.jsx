import React, { useState, useEffect, useCallback } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './app.css';
import Header from './components/header';
import Main from './pages/main';
import Search from './pages/search';
import Watch from './pages/watch';

function App({ youtubeService }) {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  const handleSearch = useCallback((query) => {
    navigate('/results');
    youtubeService
    .searchVideo(query)
    .then((videos) => setVideos(videos));
  }, [youtubeService, navigate]);

  useEffect(() => {
    youtubeService
      .mostPopular()
      .then((videos) => setVideos(videos));
  }, [youtubeService]);

  return (
    <>
      <Header onSearch={handleSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              youtubeService={youtubeService}
              videos={videos}
            />
          }
        ></Route>
        <Route
          path="/results"
          element={
            <Search
              youtubeService={youtubeService}
              videos={videos}
            />
          }
        ></Route>
        <Route
          path=":videoId"
          element={<Watch youtubeService={youtubeService} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;