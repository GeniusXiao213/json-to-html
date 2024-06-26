import React, {useContext} from 'react';
import '../../main-area/text-area/text-area.css';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Button, Box, Divider, Typography } from '@mui/material';
import './dataDisplay.css';
import { CompanyContext } from '../../../pages/Home';

function CompanyTitle() {
  const clickedCompany = useContext(CompanyContext);
  return (
    <Box>
        <Box sx={{display:'flex',padding:'1em 2em',alignItems:'center'}} >
            <ApartmentIcon sx={{paddingRight:'20px',width:'48px',height:'40px'}}/>
            <Typography className='company-title-text'>
            {/* 海南欧企查科技有限公司 */}
            {clickedCompany.name && clickedCompany.name.name}
            </Typography>
        </Box>
        <Box sx={{display:'flex',padding:'0 2em',alignItems:'center'}}>
            <button variant="contained" className='title-btn'>档案</button>
            <button variant="contained" className='title-btn'>观察</button>
        </Box>
        <Divider variant='fullWidth' className='title-divider' />
    </Box>
  )
}

export default CompanyTitle