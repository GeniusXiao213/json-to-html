import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './search-bar.css'
import { Select, MenuItem, InputLabel } from "@mui/material";
import {Box} from '@mui/material';
import axios from 'axios';

export const SearchBar = () => {
  const [filteredCompanies,setfilteredCompanies]=useState([]); //for dropdown
  const [searchedCompany,setSearchedCompany]=useState({});
  const [loading,setLoading]=useState(true);
  const [input,setInput]=useState('');

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/data?name=${filterValue}`'); 
      setSearchedCompany(response.data);
      console.log('set searchedCompany succeed!')
    } catch (error) {
      console.error('Error fetching searchedCompany:', error);
    }
  };
    fetchData();
  }, []);

  const handleSubmit=(e)=>{
    e.preventDefault();
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/data?name=${input}`'); 
        setSearchedCompany(response.data);
        console.log('set searchedCompany succeed!')
      } catch (error) {
        console.error('Error fetching searchedCompany:', error);
      }
    };
    console.log(searchedCompany);
}

  return (
    <div>
        <div className="input-wrapper" >
          <SearchIcon className="search-icon" />
          {/* Company or Person */}
          <input placeholder="公司或个人" />
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
    </Box>
  )
}

      // <Box sx={{width:'100%',height:'35px !important',backgroundColor:'white !important'}}></Box>
      // <Box>
      //     {/* <li key={index}>{JSON.stringify(item.address)}</li> */}
      //     {/* <CompanyTitle />
      //     <CompanyText /> */}
      // </Box>