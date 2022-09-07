import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import axios from 'axios';
import Youtube from './service/youtube';
import { BrowserRouter } from 'react-router-dom';

// Fix the SameSite cookie warning
document.cookie = "safeCookie1=foo; SameSite=Lax"; 
document.cookie = "safeCookie2=foo"; 
document.cookie = "crossCookie=bar; SameSite=None; Secure";

// fetch 사용하려면 httpClient 부분을 fetch를 사용해서 바꿔줌
const httpClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
})
const youtubeService = new Youtube(httpClient);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App youtubeService={youtubeService}/>
    </BrowserRouter>
  </React.StrictMode>
);