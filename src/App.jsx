import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/common/NavColumn';
import MainFeedContainer from './components/common/MainFeedContainer';
import Register from './components/login/Register';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainFeedContainer/>}/>
        <Route path="/login" element={<div>HELLOWORLD</div>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/contact" element={<div></div>} />
        <Route path="/otherstuff" element={<div></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

