import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const DateSelector = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [numGuests, setNumGuests] = useState(1)

  const handleSubmit = async () => {

  }

  return (
    // <form>
      <form className='date-selector__container' onSubmit={handleSubmit}>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate={startDate}
          value={startDate}
          endDate={endDate}
          minDate={new Date()}
          placeholderText='Select Start Date'
          required
          />
        <DatePicker
          selected={endDate}
          onChange={date => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          value={endDate}
          minDate={startDate || new Date()}
          maxDate={'hello'}
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
        <button type='submit'>Book a Reservation</button>
      </form>
    // </form>
  );
};


export default DateSelector;