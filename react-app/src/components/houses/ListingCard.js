import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import Rating from './Rating';


const ListingCard = ({ house }) => {
  const history = useHistory();

  const handleClick = (e) => {
    history.push(`listings/${house.id}`)
  }

  return (
    <div className='listings__listing-card' onClick={handleClick}>
      <img src={house.house_pic_url} alt='image unavailable' />
      <Rating house={house} />
      <h2>{house.name}</h2>
      <h3><strong>${house.price}</strong> / night</h3>
    </div>
  )
}


export default ListingCard;
