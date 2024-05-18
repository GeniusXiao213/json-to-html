import React from 'react';
import '../../main-area/main-area.css';
import '../../main-area/text-area/text-area.css';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Button, Box, Divider, Typography } from '@mui/material';
import './dataDisplay.css';

function CompanyTitle() {
  return (
    <Box>
        <Box sx={{display:'flex',padding:'1em 2em',alignItems:'center'}} >
            <ApartmentIcon sx={{paddingRight:'20px',width:'48px',height:'40px'}}/>
            <Typography className='company-title-text'>
            {/* {name} */}
            海南欧企查科技有限公司
            </Typography>
        </Box>
        <Box sx={{display:'flex',padding:'0 2em',alignItems:'center'}}>
            <Button variant="contained" className='title-button'>档案</Button>
            <Button variant="contained" className='title-button'>观察</Button>
        </Box>
        <Divider variant='fullWidth' className='title-divider' />
    </Box>
  )
}

export default CompanyTitle