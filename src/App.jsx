import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import Navbar from './layouts/Navbar';
import Index from './pages/home/Index';
import About from './components/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
