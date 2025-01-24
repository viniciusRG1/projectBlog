
import './App.css';
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Register' element={<Register/>} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
