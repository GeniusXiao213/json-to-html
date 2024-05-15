import * as React from 'react';
import { Box, ThemeProvider } from '@mui/material';

export default function SearchBox() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#1a4382',
            dark: '#0066CC',
          },
        },
      }}
    >
      <Box
        sx={{
          width: 600,
          height: 200,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      />
    </ThemeProvider>
  );
}