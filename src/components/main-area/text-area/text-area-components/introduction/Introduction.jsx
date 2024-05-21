import React from 'react';
import { Box,Divider, Container , Typography} from '@mui/material';
import '../../../text-area/text-area.css';

import Cards from '../Cards';

function Introduction() {
  return (
    <Box> 
        <Box>
            <Box className='header-text' >
                企业简介
            </Box>
            <Box className='content-text'>
              欧企查是本科在英国伯明翰大学毕业，研究生毕业于英国曼切斯特大学电机工程专业的马兆骏先生成立的创业公司，其注册资金为1000万人民币。马兆骏先生于2023年毕业后回国调研中欧两地的差异后决定创立欧企查科技有限公司。
            </Box>
            <Box sx={{textAlign:'end'}}>
                <Typography variant='subtitle2' sx={{textDecoration: 'underline',marginBottom:'8px'}}>
                  企业注册号（组织机构代码）：MADDBYU4-9
                </Typography>
                <Typography variant='subtitle2' sx={{textDecoration: 'underline'}}>
                  增值电信业务经营许可证（ICP）：琼B2-20240327
                </Typography>
            </Box>
        </Box>
        <Divider variant='fullWidth' className='divider'/>
        <Box sx={{display:'flex',flexDirection:'column'}}>
            <Container className='header-container'>
                企业愿景
            </Container>
            <Box className='content-text'>
              欧企查的发展愿景是为中国内地用户提供欧洲境内的企业信息。
            </Box>
            <Box className='content-text'>
              通过团队丰富的海外留学经历和专业知识，欧企查将为需要查询欧洲企业信息的中国内地用户提供可靠的数据支持，以帮助其获取准确的企业注册信息和市场情况，从而更好地了解欧洲市场的格局和机遇，促使其在国际舞台上取得成功。
            </Box>
        </Box>
        <Divider variant='fullWidth' className='divider'/>
        <Box sx={{display:'flex',flexDirection:'column'}}>
            
            <Container className='header-container'>
                  商业概念
            </Container>
            <Box className='content-text'>
              欧企查将为需要查询欧洲企业信息的中国企业客户（BTB）和个人消费者（BTC）提供海量欧洲范围内清晰、详细且易于理解的公司信息，为中国客户提供深入了解欧洲各跨国公司的信息渠道。
            </Box>
            <Cards />
        </Box>
        <Divider variant='fullWidth' className='divider'/>

    </Box>
  )
}

export default Introduction