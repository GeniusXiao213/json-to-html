import React from 'react'
import Introduction from './text-area-components/introduction/Introduction'
import Box from '@mui/material/Box';
import Coverage from './text-area-components/coverage/Coverage';
import Partner from './text-area-components/Partner';

function TextArea() {
  return (
    <Box className='text-area'>
        <Introduction />
        <Coverage />
        <Partner />
    </Box>
  )
}

export default TextArea