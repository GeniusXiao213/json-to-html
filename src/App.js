import React from 'react';
import './App.css';
import { BrowserRouter, BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import CompanyPage from './pages/CompanyPage';
import Header from './components/header';
import Login from './pages/Login';
import Footer from './components/footer/Footer';
import { Box } from '@mui/material';
import Home from './pages/Home';

function App() {
  return (
    <Box>
      <Box className="App">
      <Router>
        <Header />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path='company' element={<CompanyPage />}/>
        </Routes>
      </Router>
      </Box>   
        <Footer />
    </Box>
  );
}

export default App;
