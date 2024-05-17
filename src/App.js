import React from 'react';
import './App.css';
import { BrowserRouter, BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CompanyPage from './pages/CompanyPage';
import Header from './components/header';
import Footer from './components/footer/Footer';
import { Box } from '@mui/material';

// import JsonlDataDisplay from './components/jsonlDataDisplay';

function App() {
  return (
      <Box className="App">
      <Router>
        <Header />
        <Routes>
            <Route exact path='/' element={<MainPage />}/>
            <Route exact path='company' element={<CompanyPage />}/>
        </Routes>
        <Footer />
      </Router>

      </Box>   
  );
}

export default App;
