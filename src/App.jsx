import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import Navbar from './layouts/Navbar';
import Index from './pages/home/Index';
import About from './components/About';
import AllProject from './components/AllProject';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<AllProject />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
