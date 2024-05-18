import React from 'react'
import Box from '@mui/material/Box';
import './main-area.css';
import SearchBox from './search-box/Search-box.jsx'
import TextArea from './text-area/TextArea.jsx'

function MainArea() {
  return (
    <Box className="mainarea">
      <SearchBox />
      <Box sx={{width:'100%',height:'35px !important',backgroundColor:'white !important'}}></Box>
      <TextArea />
    </Box>

  )
}

export default MainArea