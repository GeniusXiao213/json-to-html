import React from 'react'
import Box from '@mui/material/Box';
import './main-area.css';
import SearchBox from './search-box/Search-box.jsx'
import TextArea from './text-area/TextArea.jsx'

function MainArea() {
  return (
    <Box className="mainarea">
      <SearchBox />
      <TextArea />
    </Box>

  )
}

export default MainArea