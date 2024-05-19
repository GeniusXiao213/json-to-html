import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CompanyPage from './pages/CompanyPage';
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
            <Route exact path='/login' element={<Login />}/>
            <Route exact path='company' element={<CompanyPage />}/>
        </Routes>
      </Router>
      </Box>   
        <Footer />
    </Box>
  );
}

export default App;
