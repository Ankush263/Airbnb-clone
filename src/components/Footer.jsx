import React from 'react';
import '../styles/Footer.css';
import { Outlet } from "react-router-dom";


const Footer = () => {
  return (
    <div className='footer'>
      <p>© 2020 Airbnb clone! No rights reserved - this is a demo!</p>
      <p>Privacy · Terms · Sitemap · Company Details</p>
      <Outlet />
    </div>
  )
}

export default Footer

