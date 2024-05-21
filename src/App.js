import React from 'react';
import './App.css';
import { BrowserRouter, BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer/Footer';
import { Box } from '@mui/material';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <Box>
      <Box className="App">
      <Router>
        <Header />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
      </Box>   
        <Footer />
    </Box>
  );
}

export default App;
