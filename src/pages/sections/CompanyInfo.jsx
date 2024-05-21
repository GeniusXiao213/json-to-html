import React from 'react';
import { Box } from '@mui/material';
import CompanyText from '../../components/data-display/data-display-components/CompanyText';
import CompanyTitle from '../../components/data-display/data-display-components/CompanyTitle';

function CompanyInfo() {
  return (
    <>
        <Box sx={{width:'100%',height:'35px !important',backgroundColor:'white !important'}}></Box>
        <Box className='text-area'>
            {/* <CompanyTitle name={searchedCompany}/> */}
            {/* <CompanyTitle name={company.name.name}/> */}
            <CompanyTitle />
        </Box>
            <Box sx={{width:'100%',height:'35px !important',backgroundColor:'white !important'}}></Box>
        <Box className='text-area'>
            {/* <CompanyText name={searchedCompany} /> */}
        </Box>
    </>
  )
}

export default CompanyInfo


// {searchedCompany  && (
//     <>
//     <Box sx={{width:'100%',height:'35px !important',backgroundColor:'white !important'}}></Box>
//     <Box className='text-area'>
//         <CompanyTitle name={searchedCompany}/>
//     </Box>
//         <Box sx={{width:'100%',height:'35px !important',backgroundColor:'white !important'}}></Box>
//     <Box className='text-area'>
//         {/* <CompanyText name={searchedCompany} /> */}
//     </Box>
//     </>)}