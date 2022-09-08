import React from 'react';
import Login from './pages/login';
import Main from './pages/main';
import { Routes, Route } from 'react-router-dom'
import styles from './app.module.css';

function App() {


  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/main" element={<Main />}></Route>
        {/* <Route path={['/', '/main']} element={<Main />}></Route> */}
      </Routes>
    </div>
  );
};

export default App;