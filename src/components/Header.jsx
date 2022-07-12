import React from 'react';
import '../styles/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";



const Header = () => {

  return (
    <div className='header'>
      <NavLink to="/">
        <img className='header__icon' src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png' alt="airbnb logo" />
      </NavLink>
      <div className="header__center">
        <input type="text" placeholder='Search' />
        <SearchIcon />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar src="/broken-image.jpg" />
      </div>
      <Outlet />
    </div>
  )
}

export default Header


