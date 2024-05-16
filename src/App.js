import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import MainArea from './components/main-area/MainArea';
import Box from '@mui/material/Box';
import Footer from './components/footer/Footer';
// import JsonlDataDisplay from './components/jsonlDataDisplay';

function App() {
  return (
    <Router>
      <Header />
      <Box className="App">
          <MainArea />
          {/* <JsonlDataDisplay /> */}
      </Box>
      <Footer />
    </Router>
  );
}

export default App;
