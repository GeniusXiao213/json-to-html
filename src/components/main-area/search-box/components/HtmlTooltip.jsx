import React from 'react'
import { Tooltip, tooltipClasses } from "@mui/material";
import { styled } from '@mui/material/styles';

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'white',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 280,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
      padding: '10px',
      '& .MuiTooltip-arrow': {
        color: 'white', // Change arrow color to white
      },
    },
  }));

export default HtmlTooltip;