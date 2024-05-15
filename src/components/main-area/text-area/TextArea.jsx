import React from 'react'
import Introduction from './text-area-components/introduction/Introduction'
import Box from '@mui/material/Box';
import Coverage from './text-area-components/coverage/Coverage';

function TextArea() {
  return (
    <Box>
        <Introduction />
        <Coverage />
    </Box>
  )
}

export default TextArea