import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Report from './Components/Pages/Report';
import Contact from './Components/Pages/Contact';
import Services from './Components/Pages/Services';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
   
  }, []);

  const handleLogout = () => {
    
    localStorage.removeItem('username');
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      <Router>
        <Header isAuthenticated={isAuthenticated} onLogin={setIsAuthenticated}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={setIsAuthenticated} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/report" element={<Report />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
