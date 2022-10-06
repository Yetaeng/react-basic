import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import Auth from './service/auth';
import Uploader from './service/uploader';
import ImageInput from './components/imageInput/imageInput';
import CardRepository from './service/database';

const auth = new Auth();
const cardRepository = new CardRepository();
const uploader = new Uploader();
const FileInput = props => (
  <ImageInput {...props} uploader={uploader} />
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App auth={auth} FileInput={FileInput} cardRepository={cardRepository}/>
    </BrowserRouter>
  </React.StrictMode>
);