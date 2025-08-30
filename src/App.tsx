import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import TokenServices from './pages/TokenServices';
import AITechnology from './pages/AITechnology';
import CodingServices from './pages/CodingServices';
import ComputerServices from './pages/ComputerServices';
import Contact from './pages/Contact';
import Membership from './pages/Membership';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/token" element={<TokenServices />} />
          <Route path="/services/ai" element={<AITechnology />} />
          <Route path="/services/coding" element={<CodingServices />} />
          <Route path="/services/computer" element={<ComputerServices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;