import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Logo from "../assets/images/Logo.jpg"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { companyClickedContext } from '../App';
import { useMediaQuery, useTheme } from '@mui/material';

function Header() {
  //const [isCompanyClicked,setIsCompanyClicked]=useState(companyClickedContext);

  // const handleClick=()=>{
  //   setIsCompanyClicked(false);
  // }
  const theme=useTheme();
  const isSmallScreen=useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className="header">
      <Link to="/home/intro" className="logo">
      <img src={Logo} alt='Logo' className='logo-img'/>
      </Link>
      {!isSmallScreen && (<h1 className='app-name'>海南欧企查科技有限公司</h1>)}
      <Link to="/login" className="login-link" >
        <ExitToAppIcon className='login-icon'/>
        Login
      </Link>
    </div>
  )
}

export default Header;