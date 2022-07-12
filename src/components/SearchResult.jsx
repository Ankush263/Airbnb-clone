import React from 'react';
import '../styles/SearchResult.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';

const SearchResult = ({ img, location, title, description, star, price, total }) => {
  return (
    <div className='searchResult'>
      <img src={img} alt="#" />
      <FavoriteBorderIcon className="searchResult__hart" />

      <div className="searchResult__info">

        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>___</p>
          <p>{description}</p>
        </div>

        <div className="searchResult__infoBottom">

          <div className="searchResult__start">

            <StarIcon className="searchResult__star" />
            <p><strong>{star}</strong></p>

          </div>

          <div className="searchResult__price">

            <h2>{price}</h2>
            <p>{total}</p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default SearchResult