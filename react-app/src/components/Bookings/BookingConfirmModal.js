import React from 'react';
import dateformat from 'dateformat';

import BookingCard from './BookingCard';


const BookingConfirmModal = ({ house, checkin, checkout, numGuests, handleSubmit }) => {
  return (
    <form className='booking-confirm-modal' onSubmit={handleSubmit}>
      <img src={house.house_pic_url} alt='house' />
      <div className='booking-confirm__title'>{house.name}</div>
      <div className='booking-confirm__numGuests'>Guests: {numGuests}</div>
      <div className='booking-confirm__checkin'>Checkin: {dateformat(checkin, 'ddd, mmm d, yyyy')}, 4pm</div>
      <div className='booking-confirm__checkout'>Checkout: {dateformat(checkout, 'ddd, mmm d, yyyy')}, 11am</div>
      <button className='booking-confirm-button' type='submit'>Confirm</button>
    </form>
  )
}


export default BookingConfirmModal;