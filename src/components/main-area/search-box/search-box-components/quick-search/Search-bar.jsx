import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import './search-bar.css'

export const SearchBar = () => {
  return (
    <div className="input-wrapper" >
        <SearchIcon className="search-icon" />
        <input placeholder="Company or Person" />
    </div>
  )
}
