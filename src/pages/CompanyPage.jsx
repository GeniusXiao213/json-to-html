import React from 'react';
import {Box} from '@mui/material';
import Header from '../components/header';
import Footer from '../components/footer/Footer';
import JsonlDataDisplay from '../components/JsonlDataDisplay';
import '../App.css';

function CompanyPage(name,register,address,additionalInfo,financials,history,network,publications) {
  return (
    <Box >
        {/* <Header />
        <Box className="App"> */}
          <JsonlDataDisplay />
        {/* </Box>
        <Footer /> */}
    </Box>
  )
}

export default CompanyPage