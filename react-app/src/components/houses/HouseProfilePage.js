import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import EmbedMap from '../EmbedMap';

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
      {/* Description */}
      <span> {house.max_guests} Guests • {house.num_beds} Beds • {house.num_baths} Baths </span>
      {/* Pic */}
      <img src={house.host.profile_pic_url} />
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

function Location({ house }) {
  const queryString = () => {
    return `${house.street_1}+${house.street_2}+${house.city}+${house.state}+${house.postal_code}`
  }

  return (
    <div className='house-profile__location'>
      {/* Reviews */}
      <div className='house-profile__map-container'>
        <EmbedMap queryString={queryString()} />
      </div>
      {/* Host Bio */}
    </div>
  )
}


// =========== MAIN PAGE COMPONENT =========== //
const HouseProfilePage = () => {
  const { id } = useParams();
  const history = useHistory();

  const [isLoaded, setIsLoaded] = useState(false);
  const [house, setHouse] = useState(null);

  useEffect(() => {

    const getHouse = async () => {
      const response = await fetch(`/api/houses/${id}`)
      const body = await response.json()
      setHouse(body)
      setIsLoaded(true)
    }
    getHouse()
  }, [id])

  const handleRedirect = () => {
    history.push('/listings')
  }

  return (
    <div className="house-profile__body">
      {!isLoaded && (
        <div>Loading...</div>
      )}
      {house && isLoaded && (
        <>
          <div className='house-profile__back-arrow'>
            <i onClick={handleRedirect} className="fas fa-arrow-left"></i>
          </div>
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

          </div>
          <div className="house-profile__body-right">
            {/* Booking */}
            <div className="house-profile__booking-container">
              BOOKING
            </div>
          </div>
          <div className='house-profile__body-bottom'>
            {/* Reviews */}
            {/* Location */}
            <div>
              <h3 className='house-profile__section-title'>Location</h3>
              <Location house={house} />
            </div>
            {/* Host Bio */}
          </div>
        </>
      )}
    </div>
  )
}


export default HouseProfilePage;
