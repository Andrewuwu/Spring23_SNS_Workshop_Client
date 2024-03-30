import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainFeedContainer from './components/common/MainFeedContainer';
import Register from './components/login/Register';
import Login from './components/login/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainFeedContainer/>}/>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/contact" element={<div></div>} />
        <Route path="/otherstuff" element={<div></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

