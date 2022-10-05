import React from 'react';
import Login from './pages/login/login';
import Main from './pages/main/main';
import { Routes, Route } from 'react-router-dom'
import styles from './app.module.css';

function App({ auth, FileInput }) {

  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Login auth={auth}/>}></Route>
        <Route path="/main" element={<Main auth={auth} FileInput={FileInput} />}></Route>
      </Routes>
    </div>
  );
};

export default App;