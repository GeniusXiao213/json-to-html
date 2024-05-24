import React, {useContext} from 'react';
import { Box,Divider, Container} from '@mui/material';
import '../../main-area/text-area/text-area.css';
import { CompanyContext } from '../../../pages/Home';

function CompanyText() {
    const clickedCompany = useContext(CompanyContext);
  
    return (
    <Box> 
        <Box sx={{display:'flex',flexDirection:'column'}}>
            <Container className='header-container'>
                名字
            </Container>
            <Box className='content-text' sx={{fontWeight:'450 !important'}}>
              {clickedCompany.name && clickedCompany.name.name}
            </Box>
        </Box>
        <Divider variant='fullWidth' className='divider'/>
        <Box sx={{display:'flex',flexDirection:'column'}}>
            
            <Container className='header-container'>
                  注册号
            </Container>
            <Box className='content-text' sx={{fontWeight:'450 !important'}}>
                {clickedCompany.register && clickedCompany.register.uniqueKey}
            </Box>
        </Box>
        <Divider variant='fullWidth' className='divider'/>
        <Box sx={{display:'flex',flexDirection:'column'}}>
            
            <Container className='header-container'>
                  地址
            </Container>
            <Box className='content-text' sx={{fontWeight:'450 !important'}}>
                    {clickedCompany.address && clickedCompany.address.formattedValue}
            </Box>
        </Box>
        <Divider variant='fullWidth' className='divider'/>
        <Box sx={{display:'flex',flexDirection:'column'}}>
            
            <Container className='header-container'>
                  企业宗旨
            </Container>
            <Box className='content-text' sx={{fontWeight:'450 !important'}}>
                {clickedCompany.subject && clickedCompany.subject}
            </Box>
        </Box>
        <Divider variant='fullWidth' className='divider'/>
        <Box sx={{display:'flex',flexDirection:'column'}}>
            
            <Container className='header-container'>
                  附加信息
            </Container>
            <Box className='content-text'>
                {/* {additionalInfo} */}
            </Box>
        </Box>
        <Divider variant='fullWidth' className='divider'/>
        <Box sx={{display:'flex',flexDirection:'column'}}>
            
            <Container className='header-container'>
                  历史
            </Container>
            <Box className='content-text'>
                {/* {history} */}
            </Box>
        </Box>
        <Divider variant='fullWidth' className='divider'/>
        <Box sx={{display:'flex',flexDirection:'column'}}>
            
            <Container className='header-container'>
                  关系网
            </Container>
            <Box className='content-text'>
                {/* {network} */}
            </Box>
        </Box>
        <Divider variant='fullWidth' className='divider'/>
        <Box sx={{display:'flex',flexDirection:'column'}}>
            
            <Container className='header-container'>
                  事件
            </Container>
            <Box className='content-text'>
                {/* {publications} */}
            </Box>
        </Box>
        <Divider variant='fullWidth' className='divider'/>
    </Box>
  )
}

export default CompanyText