import React, { Fragment, useState, useEffect } from 'react';

import ListingCard from './ListingCard'

const ListingsIdx = () => {
  const [allHouses, setAllHouses] = useState([])

  useEffect(() => {
    // FETCH ALL LISTINGS FROM FLASK
    (async () => {
      const res = await fetch('/api/houses');
      const parsedHouses = await res.json();
      setAllHouses(parsedHouses)
    })()
  }, [])

  return (
    <div className='listings__container'>
      <div className='title'><h1>Find Spooky Stays Near You</h1></div>
      {allHouses.map(house => {
        return <ListingCard key={house.id} house={house} />
      })}
    </div>
  )
}


export default ListingsIdx;
