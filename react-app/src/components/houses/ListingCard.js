import React, { Fragment } from 'react';


const ListingCard = ({ house }) => {
  console.log(house.name);
  return (
    <div className='listings__listing-card'>
      <h1>{house.name}</h1>
    </div>
  )
}


export default ListingCard;