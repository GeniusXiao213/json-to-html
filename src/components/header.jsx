import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Logo from "../assets/images/Logo.jpg"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo">
      <img src={Logo} alt='Logo' className='logo-img'/>
      </Link>
      <h1 className='app-name'>海南欧企查科技有限公司</h1>
      <Link to="/login" className="login-link">
        <ExitToAppIcon className='login-icon'/>
        Login
      </Link>
    </div>
  )
}

export default Header;