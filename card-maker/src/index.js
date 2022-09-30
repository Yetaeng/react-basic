import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import Auth from './service/auth';
import Uploader from './service/uploader';

const auth = new Auth();
const uploader = new Uploader();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App auth={auth} uploader={uploader}/>
    </BrowserRouter>
  </React.StrictMode>
);