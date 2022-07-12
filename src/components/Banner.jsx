import React, { useState } from 'react';
import Button from '@mui/material/Button';
import '../styles/Banner.css';
import Search from './Search';
import { useNavigate } from "react-router-dom";


const Banner = () => {

  const [showSearch, setShowSearch] = useState(false);
  let navigate = useNavigate();

  return (
    <div className='banner'>
      <div className="banner__search">
        {showSearch && <Search />}
        <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' varient="outlined">{showSearch ? "Hide" : "Search Dates"}</Button>
      </div>
      <div className="banner__info">
        <h1>Get Out and stretch your imagination</h1>
        <h5>Plane a different kind of getaway to uncover the hidden gems near you</h5>
        <Button variant="contained" onClick={() => navigate("./search", { replace: true })}>
        Explore Nearby
        </Button>
      </div>
    </div>
  )
}

export default Banner;

//1:30:55