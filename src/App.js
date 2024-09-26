import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';

import './App.scss'

const App = () => {
  return (
    <Router>
      <Navbar />
      <div class="app">
        <Routes>
          <Route path="portfolio_website/" element={<Home />} />
          <Route path="portfolio_website/about" element={<About />} />
          <Route path="portfolio_website/resume" element={<Resume />} />
          <Route path="portfolio_website/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
