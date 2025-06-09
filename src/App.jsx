import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from './Pages/About';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import logo from "./Images/logo512.png";


function App() {
  return (
  <Router>
    <div className='main'>
      <Navbar logo={logo}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Projects' element={<Project/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        
      </Routes>
      
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
