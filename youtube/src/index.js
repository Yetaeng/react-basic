import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import axios from 'axios';
import Youtube from './service/youtube';
import { BrowserRouter } from 'react-router-dom';

const httpClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  }
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