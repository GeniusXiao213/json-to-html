import React, {createContext, useState} from 'react';
import './App.css';
import { BrowserRouter, BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer/Footer';
import { Box } from '@mui/material';
import Home from './pages/Home';
import Login from './pages/Login';
import Intro from './pages/sections/Intro';
import CompanyInfo from './pages/sections/CompanyInfo';

export const companyClickedContext = createContext(false); //use to reflex on path

function App() {

  const [isCompanyClicked,setIsCompanyClicked]=useState(false);

  return (
    <Box>
      <Box className="App">
          {/* <companyClickedContext.Provider value={[isCompanyClicked,setIsCompanyClicked]}> */}
      <Router>
        <Header />
        <Routes>
              <Route exact path="/home" element={<Home />}>
                  <Route path="intro" element={<Intro />} />
                  <Route path="companyinfo" element={<CompanyInfo />} />
              </Route>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
          {/* </companyClickedContext.Provider> */}
      </Box>   
        <Footer />
    </Box>
  );
}

export default App;
