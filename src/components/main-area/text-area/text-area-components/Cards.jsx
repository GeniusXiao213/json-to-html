import React, { useEffect, useState } from 'react'
import InsightsIcon from '@mui/icons-material/Insights';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import { Box,Card,Divider, Grid} from '@mui/material';
import '../text-area.css';
import ai from '../../../../assets/images/card-ai.jpg';
import bigdata from '../../../../assets/images/card-bigdata.jpg';
import finicial from '../../../../assets/images/card-finicial.jpg';
import '../text-area.css';

function Cards() {

  return (
    <Grid container className='cards-grid'>
        <Grid item xs={4}>
              <Card sx={{marginRight:'40px',padding:'20px',height:'90%',boxShadow: 3}}>
                <InsightsIcon />
                {/* <imge src={finicial} alt='loading...' className='card-image'/> */}
                <Box className='content-text' sx={{fontWeight: '500 !important;'}}>
                  涉及互联网数据信息抓取收集，其数据涵括范围包括欧洲的18个国家、5900万个企业的相关信息，包括企业的股权结构变化轴线图及财务报表等。
                </Box>
              </Card>
        </Grid>
        <Grid item xs={4}>
              <Card sx={{height: '90%',marginRight:'40px',padding:'20px',boxShadow: 3}}>
                <CardMembershipIcon />
                <Box className='content-text' sx={{fontWeight: '500 !important;'}}>
                  提供欧洲企业注册信息的大数据及相关服务支持，包括数据的定期更新，维护等服务。
                </Box>
              </Card>
        </Grid>
        <Grid item xs={4}>
              <Card sx={{height: '90%',padding:'20px',boxShadow: 3}}>
                <Box>
                <ComputerOutlinedIcon />
                <Box className='content-text' sx={{fontWeight: '500 !important;'}}>
                  欧企查专业团队探索和开发人工智能搜索技术，追踪分析行业趋势，探索中欧两地商业发展前景。
                </Box>

                </Box>
              </Card>
                {/* <Box sx={{ height: 4, backgroundColor: 'cyan' }} /> */}

        </Grid>
    </Grid>
  )
}

export default Cards