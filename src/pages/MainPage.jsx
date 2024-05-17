import React from 'react';
import '../App.css';
import { Box } from '@mui/material';
import Header from '../components/header';
import MainArea from '../components/main-area/MainArea';
import Footer from '../components/footer/Footer';

function MainPage() {
  return (
    <Box>
        {/* <Header />
        <Box className="App"> */}
            <MainArea />
        {/* </Box>
        <Footer /> */}
    </Box>
  )
}

export default MainPage