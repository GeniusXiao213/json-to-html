import React from 'react';
import { Box,Grid, Container, useTheme, useMediaQuery } from '@mui/material'
import LogoPic from '../../../../assets/images/Logo.jpg';
import '../../text-area/text-area.css';

function Highlight() {
    const theme=useTheme();
    const isSmallScreen=useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
        <Container className='header-container'>
            项目亮点
        </Container>
        {/* <Grid container>
            <Grid item xs={8}> */}
            <Box sx={{marginTop:'20px'}}>
                <Box className='content-text'>
                最新且高质量的公司数据是现代数字业务流程的重要基础。我们的 机器可读数据 在全球范围内使用，从初创公司到跨国公司，以实现各种应用程序。您可以从我们的数据服务展示中的一些令人兴奋的应用程序中获得灵感。
                </Box>
                <Box className='content-text' sx={{fontWeight:'500 !important'}}>
                在欧企查发展的路上，我们不断致力于为我们的数据添加新的国家和来源。最近，我们将 希腊、塞浦路斯、 马耳他、以色列和 捷克共和国添加到了受支持的国家/地区列表中。目前，我们正在研究更多国家/地区，并深化现有国家/地区的数据覆盖范围。
                </Box>

            </Box>
            {/* </Grid>
            {!isSmallScreen && (
          <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={LogoPic} alt='Meritu' className='meritu-img' />
          </Grid>
        )}
        </Grid> */}
    </Box>
  )
}

export default Highlight