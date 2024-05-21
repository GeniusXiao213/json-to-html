import React from 'react';
import Introduction from '../../components/main-area/text-area/text-area-components/introduction/Introduction';
import Coverage from '../../components/main-area/text-area/text-area-components/coverage/Coverage';
import Partner from '../../components/main-area/text-area/text-area-components/Partner';
import { Box } from '@mui/material';

function Intro() {
  return (
    <>
      <Box sx={{width:'100%',height:'35px !important',backgroundColor:'white !important'}}></Box>
      <Box className='text-area'>
          <Introduction />
          <Coverage />
          <Partner />
      </Box>
    </>
  )
}

export default Intro