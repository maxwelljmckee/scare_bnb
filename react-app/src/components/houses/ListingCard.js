import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import Rating from './Rating';


const ListingCard = ({ house }) => {
  const history = useHistory();

  const handleClick = (e) => {
    history.push(`listings/${house.id}`)
  }

  // onClick={handleClick}

  return (
    <div className='listings__listing-card' onClick={handleClick}>
      <a href={house.id}><img src={house.house_pic_url} alt='image unavailable'/></a>
      <Rating reviews={house.reviews} />
      <h2>{house.name}</h2>
      <h3><strong>${house.price}</strong> / night</h3>
    </div>
  )
}



export default ListingCard;
