import React, { useState, useEffect, useCallback } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/search_header/header';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';
import Main from './pages/main';
import Search from './pages/search';
import Watch from './pages/watch';

function App({ youtubeService }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  // const navigate = useNavigate();

  const handleSearch = useCallback((query) => {
    // navigate('/results');
    setSelectedVideo(null);

    youtubeService
    .searchVideo(query)
    .then((videos) => setVideos(videos));
  }, [youtubeService]);

  const handleSelect = (video) => {
    // navigate('/watch/:videoId');
    setSelectedVideo(video);

    // youtubeService
    //   .watchVideo(video)
    //   .then(selectedVideo => setSelectedVideo(selectedVideo));
  }

  useEffect(() => {
    youtubeService
      .mostPopular()
      .then((videos) => setVideos(videos));
  }, [youtubeService]);

  return (
    <div className={styles.app}>
      <Header onSearch={handleSearch}></Header>
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail selectedVideo={selectedVideo}></VideoDetail>
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onSelect={handleSelect} display={selectedVideo ? 'list' : 'grid'}></VideoList>
        </div>
      </section>
    </div>
    // <>
    //   <Header onSearch={handleSearch} />
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={<Main youtubeService={youtubeService} videos={videos} onSelect={handleSelect}/>}
    //     ></Route>
    //     <Route
    //       path="/results"
    //       element={<Search youtubeService={youtubeService} videos={videos} onSelect={handleSelect}/>}
    //     ></Route>
    //     <Route
    //       path="/watch/:videoId"
    //       element={
    //         <Watch
    //           youtubeService={youtubeService}
    //           videos={videos}
    //           selectedVideo={selectedVideo}
    //         />
    //       }
    //     ></Route>
    //   </Routes>
    // </>
  );
}

export default App;