// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => {
    return (
        <Router>
            <nav className="bg-gray-800 p-4">
                <ul className="flex space-x-4">
                    <li><Link className="text-white" to="/">Home</Link></li>
                    <li><Link className="text-white" to="/about">About Me</Link></li>
                    <li><Link className="text-white" to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;

