import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';


const ListingCard = ({ house }) => {
  const history = useHistory();

  const handleClick = (e) => {
    history.push(`/listings/${house.id}`)
  }

  return (
    <div className='listings__listing-card' onClick={handleClick}>
      <img src={house.house_pic_url} alt='image unavailable' />
      <div className='rating-container'>
        <i className="fas fa-ghost"></i>
        {/* <div>{house.reviews.rating}</div> */}
      </div>
      <h2 id={`house-${house.id}`}>{house.name}</h2>
      <h3><strong>${house.price}</strong> / night</h3>
    </div>
  )
}


export default ListingCard;
