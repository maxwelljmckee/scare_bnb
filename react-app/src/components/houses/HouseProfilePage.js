import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import AmenitiesList from './AmenitiesList'


function Title({ house }) {
  return (
    <div className="house-profile__title">
      {/* Location - Name */}
      <span> {/* {house.city}, {house.state} - */} {house.name}</span>
      {/* Rating */}
      <div className='rating-container'>
        <i className="fas fa-ghost"></i>
        {/* <div>{house.reviews.rating}</div> */}
      </div>
      {/* Location? */}

    </div>
  )
}


function SubTitle({ house }) {
  return (
    <div className="house-profile__subtitle">
      {/* Hosted by */}
      <span>Hosted by {house.host.first_name}</span>
      {/* Pic */}
      <img src={house.host.profile_pic_url} />
      {/* Description */}
      <span> {house.max_guests} Guests • {house.num_beds} Beds • {house.num_baths} Baths </span>
    </div>
  )
}


function Description({ house }) {
  return (
    <div className="house-profile__description">
      {/* Hosted by */}
      <p> {house.description} </p>
    </div>
  )
}


const HouseProfilePage = () => {
  const { id } = useParams()

  const [isLoaded, setIsLoaded] = useState(false)
  const [house, setHouse] = useState(null)

  useEffect(() => {

    const getHouse = async () => {
      const response = await fetch(`/api/houses/${id}`)
      const body = await response.json()
      setHouse(body)
      setIsLoaded(true)
    }
    getHouse()
  }, [id])

  return (
    <div className="house-profile__body">
      {!isLoaded && (
        <div>Loading...</div>
      )}
      {house && isLoaded && (
        <>
          <div className="house-profile__body-top">
            {/* Title */}
            <Title house={house} />
            {/* Image */}
            <div className="house-profile__image-wrapper">
              <img src={house.house_pic_url} />
            </div>
          </div>
          <div className="house-profile__body-left">
            {/* Host */}
            <SubTitle house={house} />
            {/* Description */}
            <div>
              <h3 className="house-profile__section-title">Description</h3>
              <Description house={house} />
            </div>
            {/* Amenities */}
            <div>
              <h3 className="house-profile__section-title">Amenities</h3>
              <AmenitiesList house={house} />
            </div>
            {/* Dates? */}
            {/* Reviews */}
            {/* Location */}
            {/* Host Bio */}

          </div>
          <div className="house-profile__body-right">
            {/* Booking */}
            <div className="house-profile__booking-container">
              BOOKING
            </div>
          </div>
        </>
      )}
    </div>
  )
}


export default HouseProfilePage;
