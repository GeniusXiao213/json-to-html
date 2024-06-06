import React from 'react';
import {Grid, Box, Typography, Link} from '@mui/material';
import './footer.css';

function Footer() {
  return (
    <Grid container className='footer-container'>
        <Grid item xs={6}>
          <Link href="/" >
            <Typography variant='h8'>联系我们</Typography>
          </Link>
        </Grid>

        <Grid item xs={6}>
          <Link href="/" >
            <Typography variant='h8'>关于我们</Typography>
          </Link>
          
        </Grid>
    </Grid>
  )
}

export default Footer