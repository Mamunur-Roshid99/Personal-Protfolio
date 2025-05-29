import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import Navbar from './layouts/Navbar';
import Index from './pages/home/Index';
import About from './components/About';
import AllProject from './components/AllProject';
import Details1 from './components/Details/Details1';
import Details2 from './components/Details/Details2';
import Details3 from './components/Details/Details3';
import Details4 from './components/Details/Details4';
import Details5 from "./components/Details/Details5";
import { useEffect, useState } from 'react';
import Loader from './components/Loader';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<AllProject />} />
          <Route path="/details1" element={<Details1 />} />
          <Route path="/details2" element={<Details2 />} />
          <Route path="/details3" element={<Details3 />} />
          <Route path="/details4" element={<Details4 />} />
          <Route path="/details5" element={<Details5 />} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App
