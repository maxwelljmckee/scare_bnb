import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import AmenitiesList from './AmenitiesList'


function Title({ house }) {
  return (
    <div>
      {/* Location - Name */}
      <span> {house.city}, {house.state} - {house.name}</span>
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
    <div>
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
    <div>
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
    <div style={{ paddingTop: "60px" }}>
      {!isLoaded && (
        <div>Loading...</div>
      )}
      {house && isLoaded && (
        <>
          {/* Title */}
          <Title house={house} />
          {/* Image */}
          <img src={house.house_pic_url} />
          <div>
            {/* Host */}
            <SubTitle house={house} />
            {/* Description */}
            <Description house={house} />
            {/* Amenities */}
            <AmenitiesList house={house} />
            {/* Dates? */}
            {/* Reviews */}

          </div>
          <div>
            {/* Booking */}
          </div>
        </>
      )}
    </div>
  )
}


export default HouseProfilePage;
