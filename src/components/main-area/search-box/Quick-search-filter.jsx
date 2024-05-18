import React from 'react';
import { Select, MenuItem, InputLabel } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { GB, AT, BE, CY, CZ, DK, FI, FR, DE, GR, IL, LU, MT, NO, PL, ES, SE, CH } from 'country-flag-icons/react/3x2';
import '../../../pages/home.css';

const QuickSearchFilter = () => {
  return (
    <div className="quick-search-filter">
        <div>
          <InfoOutlinedIcon className="info-icon" />
          {/* <InputLabel id='country-filter-label'> all countries </InputLabel> */}
          <Select
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
          </Select>
        </div>
    </div>
  )
}

export default QuickSearchFilter