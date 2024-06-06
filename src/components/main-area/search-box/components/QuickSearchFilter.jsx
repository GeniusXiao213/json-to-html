import React, { useState } from 'react';
import { MenuItem, TextField, FormControl, Box } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { SvgIcon } from '@mui/material';
import HtmlTooltip from './HtmlTooltip';
import { GB, AT, BE, CY, CZ, DK, FI, FR, DE, GR, IL, LU, MT, NO, PL, ES, SE, CH } from 'country-flag-icons/react/3x2';
import '../../../../pages/home.css';

const QuickSearchFilter = () => {
  
  const [country, setCountry] = useState('');

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const WhiteArrowDropDownIcon = () => {
    return (
      <SvgIcon component={ArrowDropDownIcon} style={{ color: 'white' }} />
    );
  };

  return (
    <div className="quick-search-filter">
        <Box className='filter-div' sx={{display:'flex', alignItems:'center'}}>
          <HtmlTooltip
            title={
              <React.Fragment>
                <b>国家过滤器</b>
                <br />
                {"通过在此处选择所需的国家/地区，将搜索限制为特定国家/地区的公司和个人。"}
              </React.Fragment>
            }
            arrow
            placement='left'
          >
            <InfoOutlinedIcon className="info-icon" />
          </HtmlTooltip>
           
          <FormControl variant="standard" className='country-filter no-underline'>
            <TextField 
            select
            className='country-select' 
            label='国家'
            value={country} 
            onChange={handleChange}
            variant='standard'
            InputProps={{ disableUnderline: true }}
            SelectProps={{
              IconComponent: WhiteArrowDropDownIcon,
              MenuProps: {
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
                transformOrigin: {
                  vertical: 'top',
                  horizontal: 'left',
                },
                getContentAnchorEl: null,
                PaperProps: {
                  style: {
                    maxHeight: 300,
                  },
                },
              }
            }}
            sx={{
              '::selection':{
                color:'white',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '& .MuiInputLabel-root': {
                color: 'white',
              },
              '& .MuiInputLabel-root:Focus': {
                color: 'white',
              },
              '& .MuiInputLabel-root:active': {
                color: 'white',
              },
              '& .MuiSelect-select':{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                color:'white !important'
              }
              
            }}>
              <MenuItem value="united-kingdom"><GB className="country-flag" />英国</MenuItem>
              <MenuItem value="austria"><AT className="country-flag" />奥地利</MenuItem>
              <MenuItem value="belgium"><BE className="country-flag" />比利时</MenuItem>
              <MenuItem value="cyprus"><CY className="country-flag" />塞浦路斯</MenuItem>
              <MenuItem value="czech-republic"><CZ className="country-flag" />捷克共和国</MenuItem>
              <MenuItem value="denmark"><DK className="country-flag" />丹麦</MenuItem>
              <MenuItem value="finland"><FI className="country-flag" />芬兰</MenuItem>
              <MenuItem value="france"><FR className="country-flag" />法国</MenuItem>
              <MenuItem value="germany"><DE className="country-flag" />德国</MenuItem>
              <MenuItem value="greece"><GR className="country-flag" />希腊</MenuItem>
              <MenuItem value="israel"><IL className="country-flag" />以色列</MenuItem>
              <MenuItem value="luxembourg"><LU className="country-flag" />卢森堡</MenuItem>
              <MenuItem value="malta"><MT className="country-flag" />马耳他</MenuItem>
              <MenuItem value="norway"><NO className="country-flag" />挪威</MenuItem>
              <MenuItem value="poland"><PL className="country-flag" />波兰</MenuItem>
              <MenuItem value="spain"><ES className="country-flag" />西班牙</MenuItem>
              <MenuItem value="sweden"><SE className="country-flag" />瑞典</MenuItem>
              <MenuItem value="switzerland"><CH className="country-flag" />瑞士</MenuItem>
            </TextField>
          </FormControl>
        </Box>
    </div>
  );
};

export default QuickSearchFilter