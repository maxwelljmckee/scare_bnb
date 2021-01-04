import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import { context } from '../../App';


const DateSelector = ({ house }) => {
  const user = useContext(context);
  const history = useHistory()

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [numGuests, setNumGuests] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newBooking = {
      houseId: house.id,
      guestId: user.id,
      checkin: startDate,
      checkout: endDate,
      numGuests
    }

    const res = await fetch('/api/bookings/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBooking)
    })
    history.push('/listings')
  }

  return (
      <form className='date-selector__container' onSubmit={handleSubmit}>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate={startDate || new Date()}
          endDate={endDate || new Date()}
          minDate={new Date()}
          placeholderText='Select Start Date'
          required
          />
        <DatePicker
          selected={endDate}
          onChange={date => setEndDate(date)}
          selectsEnd
          startDate={startDate || new Date()}
          endDate={endDate || new Date()}
          minDate={startDate || new Date()}
          placeholderText='Select End Date'
          required
        />
        <div className='booking-card__add-guests'>
          <input
            type='number'
            placeholder='Add Guests'
            min='1'
            value={numGuests}
            onChange={(e) => setNumGuests(e.target.value)}
          />
        </div>
        <div className='booking-card__submit'>
          <button type='submit'>Book a Reservation</button>
        </div>
      </form>
  );
};


export default DateSelector;