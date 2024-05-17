import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './search-bar.css'
import { Select, MenuItem, InputLabel } from "@mui/material";


export const SearchBar = () => {
  return (
    <div>
        <div className="input-wrapper" >
          <SearchIcon className="search-icon" />
          {/* Company or Person */}
          <input placeholder="Company or Person" />
        </div>
        <div className="quick-search-filter">
          <div>
          <InfoOutlinedIcon className="info-icon" />
          <input name="countries" type="hidden" class="noselection"/>
          <Select
          variant="standard"
          disableUnderline="true"
          className="country-filter"
          labelId="country-filter-label"
          id="country-filter"
          label="all countries"
          name="country-filter"
          >
            <MenuItem>United Kingdom</MenuItem>
            <MenuItem>Austria</MenuItem>
            <MenuItem>Belgium</MenuItem>
          </Select>
          </div>
        </div>
    </div>
  )
}
