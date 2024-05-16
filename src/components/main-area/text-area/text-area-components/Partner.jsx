import React from 'react'
import { Box,Grid, Container } from '@mui/material'
import MerituPic from '../../../../assets/images/meritu.jpg';
import '../../text-area/text-area.css';

//合作伙伴
function Partner() {
  return (
    <Box>
        <Container className='header-container'>
            合作伙伴
        </Container>
        <Grid container>
            <Grid item xs={8}>
                <Box className='content-text'>
                    企业名称： MERITU AG(德国美丽途股份有限公司，简称“美丽途”)
                </Box>
                <Box className='content-text'>
                    商业地址： Hohenzollernring 57, 50672 Köln, Germany （德国科隆市 Hohenzollernring 57号，邮编50672）
                </Box>
                <Box className='content-text'>
                    商业登记：科隆地方法院登记号码 116876
                </Box>
            </Grid>
            <Grid item xs={4} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <img src={MerituPic} alt='Meritu' className='meritu-img'/>
            </Grid>
        </Grid>
        <Box className='content-text'>
        MERITU AG 成立于德国法兰克福，并是在德国证券交易所的上市公司。注册资本:5,050,000欧元。
主营业务:包括传媒广告、文娱娱乐、可持续新能源、商业地产等在内的一系列B2B及B2C服务。例如互联网数据运营、互联网精准营销广告平台技术服务、数据分析、及LCD数字屏幕广告传播业务，打造为O2O(线上到线下)综合解决方案专业运营提供商。
通过与合作伙伴的战略顶层规划，联手电信运营商领域建设、运营大数据资源和云计算资源的平台，为行业提供优质精准服务。
        </Box>
    </Box>
  )
}

export default Partner