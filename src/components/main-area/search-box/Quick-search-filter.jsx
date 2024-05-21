import React, { useState, ChangeEvent } from 'react';
import { Select, MenuItem, InputLabel, TextField } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { GB, AT, BE, CY, CZ, DK, FI, FR, DE, GR, IL, LU, MT, NO, PL, ES, SE, CH } from 'country-flag-icons/react/3x2';
import '../../../pages/home.css';

const QuickSearchFilter = () => {
  
  const [country, setCountry] = useState('');

  const handleChange = (value) => {
    setCountry(value);
  }
  return (
    <div className="quick-search-filter">
        <div className='filter-div'>
          <InfoOutlinedIcon className="info-icon" />
          {/* <InputLabel id='country-filter-label'> all countries </InputLabel> */}
          {/* <Select
          variant="standard"
          disableUnderline="true"
          className="country-filter"
          labelId="country-filter-label"
          id="country-filter"
          label="all countries"
          name="country-filter"
          >
            <MenuItem><GB className="country-flag" />United Kingdom</MenuItem>
            <MenuItem><AT className="country-flag" />Austria</MenuItem>
            <MenuItem><BE className="country-flag" />Belgium</MenuItem>
            <MenuItem><CY className="country-flag" />Cyprus</MenuItem>
            <MenuItem><CZ className="country-flag" />Czech Republic</MenuItem>
            <MenuItem><DK className="country-flag" />Denmark</MenuItem>
            <MenuItem><FI className="country-flag" />Finland</MenuItem>
            <MenuItem><FR className="country-flag" />France</MenuItem>
            <MenuItem><DE className="country-flag" />Germany</MenuItem>
            <MenuItem><GR className="country-flag" />Greece</MenuItem>
            <MenuItem><IL className="country-flag" />Israel</MenuItem>
            <MenuItem><LU className="country-flag" />Luxembourg</MenuItem>
            <MenuItem><MT className="country-flag" />Malta</MenuItem>
            <MenuItem><NO className="country-flag" />Norway</MenuItem>
            <MenuItem><PL className="country-flag" />Poland</MenuItem>
            <MenuItem><ES className="country-flag" />Spain</MenuItem>
            <MenuItem><SE className="country-flag" />Sweden</MenuItem>
            <MenuItem><CH className="country-flag" />Switzerland</MenuItem>
          </Select> */}
          <TextField className='country-filter' label='all countries' select value={country} onChange={handleChange}>
            <MenuItem><GB className="country-flag" />英国</MenuItem>
            <MenuItem><AT className="country-flag" />奥地利</MenuItem>
            <MenuItem><BE className="country-flag" />比利时</MenuItem>
            <MenuItem><CY className="country-flag" />塞浦路斯</MenuItem>
            <MenuItem><CZ className="country-flag" />捷克共和国</MenuItem>
            <MenuItem><DK className="country-flag" />丹麦</MenuItem>
            <MenuItem><FI className="country-flag" />芬兰</MenuItem>
            <MenuItem><FR className="country-flag" />法国</MenuItem>
            <MenuItem><DE className="country-flag" />德国</MenuItem>
            <MenuItem><GR className="country-flag" />希腊</MenuItem>
            <MenuItem><IL className="country-flag" />以色列</MenuItem>
            <MenuItem><LU className="country-flag" />卢森堡"</MenuItem>
            <MenuItem><MT className="country-flag" />马耳他</MenuItem>
            <MenuItem><NO className="country-flag" />挪威</MenuItem>
            <MenuItem><PL className="country-flag" />波兰</MenuItem>
            <MenuItem><ES className="country-flag" />西班牙</MenuItem>
            <MenuItem><SE className="country-flag" />瑞典</MenuItem>
            <MenuItem><CH className="country-flag" />瑞士</MenuItem>
          </TextField>
        </div>
    </div>
  )
}

export default QuickSearchFilter