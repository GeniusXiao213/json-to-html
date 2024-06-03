import React, {useContext} from 'react';
import { Box,Divider, Container, Tooltip} from '@mui/material';
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
              {clickedCompany.name.name && clickedCompany.name.name}
            </Box>
            <Box className='content-text' sx={{fontWeight:'450 !important'}}>
              {clickedCompany.name.legalForm && 
              <Box sx={{display:'flex',alignItems:'center'}}>
                <Tooltip title="法律形式">
                    <Box className='company-text-label'>法律形式</Box>

                </Tooltip>
                {clickedCompany.name.legalForm}</Box>}
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
            <Box className='content-text' sx={{fontWeight:'450 !important'}}>
            {clickedCompany.filings && clickedCompany.filings.map((filing)=>(
                filing.source && <Box sx={{display:'flex',alignItems:'center',marginBottom:'0.3em',color:'#007388',cursor:'pointer'}}>
                <Tooltip title="法律形式">
                    <Box className='company-text-label'>{filing.source}</Box>

                </Tooltip>
                {filing.name}</Box>
            ))}
            </Box>
        </Box>
        <Divider variant='fullWidth' className='divider'/>
        <Box sx={{display:'flex',flexDirection:'column'}}>
            
            <Container className='header-container'>
                  地址
            </Container>
            <Box className='content-text' sx={{fontWeight:'450 !important',color:'#007388',cursor:'pointer'}}>
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
            <Box className='content-text' sx={{fontWeight:'450 !important'}}>
            {/* {clickedCompany.segmentCodes &&  */}
            {/* // // clickedCompany.segmentCodes.uksic.map((uksic)=>(
            // //     <Box sx={{display:'flex',alignItems:'center',marginBottom:'0.3em',color:'#007388',cursor:'pointer'}}>
            // //     <Tooltip title="segment code">
            // //         <Box className='company-text-label'>{uksic}</Box>

            // //     </Tooltip> */}
            
               
            {/* //</Box>} */}
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