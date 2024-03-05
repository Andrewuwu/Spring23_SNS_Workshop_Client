import { useState, useEffect } from 'react';

import './App.css';
import Navbar from './components/common/Navbar';
import MainFeedContainer from './components/common/MainFeedContainer';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <MainFeedContainer></MainFeedContainer>
    </>
  );
}

export default App;
