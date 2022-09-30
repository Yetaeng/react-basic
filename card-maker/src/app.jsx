import React from 'react';
import Login from './pages/login/login';
import Main from './pages/main/main';
import { Routes, Route } from 'react-router-dom'
import styles from './app.module.css';

function App({ auth, uploader }) {

  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/login" element={<Login auth={auth}/>}></Route>
        <Route path="/" element={<Login auth={auth}/>}></Route>
        <Route path="/main" element={<Main uploader={uploader}/>}></Route>
        {/* <Route path={['/', '/main']} element={<Main />}></Route> */}
      </Routes>
    </div>
  );
};

export default App;