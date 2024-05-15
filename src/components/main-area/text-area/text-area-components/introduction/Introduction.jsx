import React from 'react';
import { Box,Card,Divider, Container ,TextBlock} from '@mui/material';
import '../../../text-area/text-area.css';
import './introduction.css';
import InsightsIcon from '@mui/icons-material/Insights';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';

function Introduction() {
  return (
    <Box className='introduction'> 
        <Box>
            <Box className='header-text' >
                企业简介
            </Box>
            <Box className='content-text'>
              欧企查是本科在英国伯明翰大学毕业，研究生毕业于英国曼切斯特大学电机工程专业的马兆骏先生成立的创业公司，其注册资金为1000万人民币。马兆骏先生从小生活在德国，具有良好的教育背景，于2023年毕业后回国调研中欧两地的差异后决定创立欧企查科技有限公司。
            </Box>
        </Box>
        <Divider variant='fullWidth' className='divider'/>
        <Box>
            <Box className='header-text' >
                企业愿景
            </Box>
            <Box className='content-text'>
              欧企查的发展愿景是为中国内地用户提供欧洲境内的企业信息。
            </Box>
            <Box className='content-text'>
              通过团队丰富的海外留学经历和专业知识，欧企查将为需要查询欧洲企业信息的中国内地用户提供可靠的数据支持，以帮助其获取准确的企业注册信息和市场情况，从而更好地了解欧洲市场的格局和机遇，促使其在国际舞台上取得成功。
            </Box>
        </Box>
        <Divider variant='fullWidth' className='divider'/>
        <Box>
            
            <Container maxWidth="sm">
              {/* <Box className='header-text' > */}
                  商业概念
              {/* </Box> */}
            </Container>
            <Box className='content-text'>
              欧企查将为需要查询欧洲企业信息的中国企业客户（BTB）和个人消费者（BTC）提供海量欧洲范围内清晰、详细且易于理解的公司信息，为中国客户提供深入了解欧洲各跨国公司的信息渠道。
            </Box>
            <Box className='cards-container'>
              <Card sx={{height:'200px',marginRight:'40px',padding:'20px'}}>
                <InsightsIcon />
                <Box className='content-text'>
                  涉及互联网数据信息抓取收集，其数据涵括范围包括欧洲的16个国家、5900万个企业的相关信息，包括企业的股权结构变化轴线图及财务报表等。
                </Box>
              </Card>
              <Card sx={{height:'200px',marginRight:'40px',padding:'20px'}}>
                <CardMembershipIcon />
                <Box className='content-text'>
                  提供欧洲企业注册信息的大数据及相关服务支持，包括数据的定期更新，维护等服务。
                </Box>
              </Card>
              <Card sx={{height:'200px',padding:'20px'}}>
                <ComputerOutlinedIcon />
                <Box className='content-text'>
                  欧企查专业团队探索和开发人工智能搜索技术，追踪分析行业趋势，探索中欧两地商业发展前景。
                </Box>
              </Card>
            </Box>
        </Box>
        <Divider variant='fullWidth' className='divider'/>

    </Box>
  )
}

export default Introduction