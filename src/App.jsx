import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import Navbar from './layouts/Navbar';
import Index from './pages/home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
