import React from 'react';


import Rating from '../houses/Rating';
import DateSelector from './DateSelector'

const BookingCard = ({ house }) => {
  return (
    <div className="house-profile__booking-card">
      <div className='booking-card__container'>
        <div className='booking-card__flex-group-1'>
          <h3><span>${house.price}</span> / night</h3>
          <Rating reviews={house.reviews} />
        </div>
        <DateSelector house={house} />
      </div>
    </div>
  )
}


export default BookingCard;