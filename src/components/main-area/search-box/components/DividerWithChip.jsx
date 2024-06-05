import React from 'react';
import { Divider,Chip } from '@mui/material';

function DividerWithChip() {
  return (
    <Divider sx={{marginBlock:'10px'}}>
          <Chip label="欧企查" size="small" />
    </Divider>
  )
}

export default DividerWithChip