import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import { context } from '../../App';
import LoginForm from '../SplashPage/auth/LoginFormModal/LoginForm';
import { Dialog } from '@material-ui/core'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { authenticate } from '../../services/auth';


const DateSelector = ({ house }) => {
  const userData = useContext(context);
  const {authenticated, setAuthenticated} = userData
  const history = useHistory();

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [numGuests, setNumGuests] = useState('');

  // MODAL CONFIG //
  const [openLogin, setOpenLogin] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleCloseLogin = () => {
    setOpenLogin(false)
  }

  const handleCloseConfirm = () => {
    setOpenConfirm(false)
  }
  
  const handleModal = (e) => {
    e.preventDefault()
    if (!authenticated) {
      setOpenLogin(true);
    } else {
      setOpenConfirm(true)
      const newBooking = {
          houseId: house.id,
          guestId: authenticated.id,
          checkin: startDate,
          checkout: endDate,
          numGuests
        }
      console.log('HIT MODAL', newBooking);
      
    }
  }
  /////////////////

  // const handleSubmit = async (newBooking) => {
  //   e.preventDefault();
  //   const res = await fetch('/api/bookings/create', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(newBooking)
  //   })
  // }

  return (
    <>
      {/* LOGIN MODAL FOR UNAUTHENTICATED USER */}
      <Dialog
        open={openLogin}
        onClose={handleCloseLogin}
      >
        <DialogContent>
          <LoginForm 
            authenticated={authenticated} 
            setAuthenticated={setAuthenticated} 
            onClose={handleCloseLogin} />
        </DialogContent>
      </Dialog>

      {/* CONFIRMATION MODAL FOR AUTHENTICATED USER */}
      {/* <Dialog
        open={openConfirm}
        onClose={handleCloseConfirm}
      >

      </Dialog> */}

      {/* DATE SELECTION FORM */}
      <form className='date-selector__container' onSubmit={handleModal}>
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
    </>
  );
};


export default DateSelector;