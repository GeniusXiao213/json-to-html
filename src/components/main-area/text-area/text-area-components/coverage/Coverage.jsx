import { Box,Grid,Container,Divider } from '@mui/material'
import React from 'react'
import '../../../text-area/text-area.css';
import './coverage.css';

function Coverage() {
  return (
    <Box >
                <Container className='header-container'>产品与服务</Container>
        <Grid container spacing={2} >
            <Grid item xs={6.2}>
                <Box className='content-text'>
                  欧洲：涵盖上市公司、初创公司、跨国公司、中小型企业等各种规模和类型的公司。
                  </Box>
                <Box className='content-text'>信息类型：企业名称及地址、商业登记、经营范围、企业发展轴线图、法定代表人、行业内融资项目、并购信息、企业分支组织架构图、企业官方出版物、企业官方年度财务报告全文、资产负债表和损益表、以及绩效指标等高级信息。</Box>
            </Grid>
            <Grid item xs={5.8} sx={{marginTop:'35px'}}>
                <Box>
                    <Grid container gap={2} sx={{marginBottom:'3.5em',justifyContent:'center'}}>
                      <Grid item xs={5} className='coverage-block-first' sx={{backgroundColor: '#447c9c'}}>16个国家</Grid>
                      <Grid item xs={5} className='coverage-block-first' sx={{backgroundColor: '#829bbb'}}>5900万家企业</Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={3} className='coverage-block-second' sx={{backgroundColor: '#9baf66'}}>100+ 产业链</Grid>
                      <Grid item xs={4.2} className='coverage-block-second' sx={{backgroundColor: '#66af8b'}}>10000+ 行业类型</Grid>
                      <Grid item xs={4.2} className='coverage-block-second' sx={{backgroundColor: '#9852a9'}}>10000+ 细分领域</Grid>
                    </Grid>
                </Box> 
            </Grid>
            
        </Grid>
        <Divider variant='fullWidth' className='divider'/>
    </Box>
  )
}

export default Coverage