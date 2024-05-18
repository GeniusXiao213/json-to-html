import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Box from '@mui/material/Box';
import Login from './pages/Login';
import Footer from './components/footer/Footer';
import Home from './pages/Home';

function App() {
  return (
    <Box className="App">
      <Router>
        <Header />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
  
    </Box>    
  );
}

export default App;
