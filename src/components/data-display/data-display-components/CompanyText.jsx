import React, {useContext} from 'react';
import { Box,Divider, Container, Tooltip} from '@mui/material';
import '../../main-area/text-area/text-area.css';
import { CompanyContext } from '../../../pages/Home';
import LicensePic from '../../../../src/assets/images/CCby.png';
import DividerWithChip from '../../main-area/search-box/components/DividerWithChip';

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
        {/* <Divider variant='fullWidth' className='divider'/> */}
        <DividerWithChip />
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
        {/* <Divider variant='fullWidth' className='divider'/> */}
        <Divider sx={{marginTop:'5px',marginBottom:'2em'}}/>
        <Box sx={{display:'flex',flexDirection:'column'}}>
            
            <Container className='header-container'>
                  地址
            </Container>
            <Box className='content-text' sx={{fontWeight:'450 !important',color:'#007388',cursor:'pointer'}}>
                    {clickedCompany.address && clickedCompany.address.formattedValue}
            </Box>
        </Box>
        {/* <Divider variant='fullWidth' className='divider'/> */}
        <Divider sx={{marginTop:'5px',marginBottom:'2em'}}/>
        <Box sx={{display:'flex',flexDirection:'column'}}>
            
            <Container className='header-container'>
                  企业宗旨
            </Container>
            <Box className='content-text' sx={{fontWeight:'450 !important'}}>
                {clickedCompany.subject && clickedCompany.subject}
            </Box>
        </Box>
        {/* <Divider variant='fullWidth' className='divider'/> */}
        <Divider sx={{marginTop:'5px',marginBottom:'2em'}}/>
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
        <Divider sx={{marginTop:'5px',marginBottom:'2em'}}/>
        <Box sx={{display:'flex',flexDirection:'column'}}>
            
            <Container className='header-container'>
                  历史
            </Container>
            <Box className='content-text'>
                {/* {history} */}
            </Box>
        </Box>
        <Divider sx={{marginTop:'5px',marginBottom:'2em'}}/>
        <Box sx={{display:'flex',flexDirection:'column'}}>
            
            <Container className='header-container'>
                  关系网
            </Container>
            <Box className='content-text'>
                {/* {network} */}
            </Box>
        </Box>
        <Divider sx={{marginTop:'5px',marginBottom:'2em'}}/>
        <Box sx={{display:'flex',flexDirection:'column'}}>
            
            <Container className='header-container'>
                  事件
            </Container>
            <Box className='content-text'>
                {/* {publications} */}
            </Box>
        </Box>
        {/* <Divider variant='fullWidth' className='divider'/> */}
        <DividerWithChip />
        <div className="info-footer">
            <Box sx={{display:'flex', flexDirection:'column'}} className='footer-text'>   
                {/* {info} */}
                {/* The data on this page is generated by a fully automated algorithm. It may have errors, and is provided on an "as is" basis with no guarantees of completeness, accuracy, usefulness or timeliness. */}
                这个页面上的数据是由完全自动化的算法生成的。它可能存在错误，并且是基于“现状”提供的，没有完整性、准确性、实用性或及时性的保证。
            </Box>
            <Box sx={{display:'flex', flexDirection:'row'}} className='licenses' >
                <img src={LicensePic} alt='CC-BY' className='CC-img'/>
                <div>
                    "{clickedCompany.name && clickedCompany.name.name}" 的可视化由 <a href='/' className='license-links'>欧企查</a> 提供，并可根据 Creative Commons CC-BY 许可条款进行重用。 
                    {/* <a href='https://creativecommons.org/licenses/by/4.0/' className='license-links'>Creative Commons CC-BY license</a>. */}
                </div>    
            </Box>
        </div>
        
    </Box>
  )
}

export default CompanyText