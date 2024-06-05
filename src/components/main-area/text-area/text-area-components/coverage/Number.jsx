import React, { useEffect, useState } from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './number.css';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    h6: {
      fontSize: '1rem',
    },
  },
});

const AnimatedNumber = ({ value, duration }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const incrementTime = (duration / end) * 10;
    let timer = setInterval(() => {
      start += 1;
      setDisplayValue(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [value, duration]);

  return <Typography variant="h1">{displayValue.toLocaleString()}</Typography>;
};

const Number = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box textAlign="center" mt={5}>
          {/* <AnimatedNumber value={18} duration={2} /> */}
          <Typography variant="h1">18个国家 5900万家企业</Typography> 
          <Grid container spacing={3} justifyContent="center" mt={3}>
            {/* <Grid item>
              <Box bgcolor="lightgreen" p={2} borderRadius="50%">
                <Typography variant="h6">18 Countries</Typography>
              </Box>
            </Grid> */}
            <Grid item>
              <Box bgcolor="lightgreen" p={2} className='circle-box' sx={{backgroundColor: '#9baf66'}}>
                <Typography variant="h6">100+  产业链</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box bgcolor="lightgreen" p={2} className='circle-box' sx={{backgroundColor: '#66af8b'}}>
                <Typography variant="h6">10000+ 行业类型</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box bgcolor="lightgreen" p={2} className='circle-box' sx={{backgroundColor: '#9852a9'}}>
                <Typography variant="h6">10000+ 细分领域</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Number;
