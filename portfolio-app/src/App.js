import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Navbar from './components/Home/Navbar';
import Footer from './components/Home/Footer';
import About from './components/About/About'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;

