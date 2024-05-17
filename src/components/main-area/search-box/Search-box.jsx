import * as React from 'react';
import { Box} from '@mui/material';
import './search-box.css';
import Tabs from './search-box-components/Tabs.jsx';

export default function SearchBox() {

  return (
    <Box className='search-box'
      sx={{
        width: 'fullwidth',
        height: 'fit',
        display: 'flex',
        flexDirection: 'column',
        justifySelf: 'center',
        borderRadius: 1,
        bgcolor: '#447c9c',
      }}>
        <Box className='search-box-header' >
          欧洲公司搜索引擎
        </Box>
        <Box>
          <Tabs />
        </Box>
    </Box>
  );
}