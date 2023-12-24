import logo from './logo.svg';
import './App.css';
import "@fontsource/dancing-script";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Yeyeye from './pages/yeyeye';
import Besharam from './pages/besharam';

function App() {
  return (
    <>
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path='/yeyeye' element={<Yeyeye/>}></Route>
        <Route path='/besharam' element={<Besharam/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
