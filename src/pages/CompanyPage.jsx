import React from 'react';
import {Box} from '@mui/material';
import '../App.css';
import SearchBox from '../components/main-area/search-box/Search-box';

function CompanyPage(name,register,address,additionalInfo,financials,history,network,publications) {
  return (
    <Box >
        <Box className="mainarea">
        <SearchBox />
      </Box>
    </Box>
  )
}

export default CompanyPage