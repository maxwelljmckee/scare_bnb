import React, { Fragment } from 'react';
require('dotenv').config()

const MAPS_API_KEY = process.env.MAPS_API_KEY

const EmbedMap = ({ queryString }) => {
  const encode = () => {
    console.log(MAPS_API_KEY);
    console.log(process.env);
    const encoded = queryString.split().join('+')
    return encoded
  }
  
  return (
    <Fragment>
      <iframe
        title='googleMaps'
        width="1000"
        height="850"
        src={`https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=${encode(queryString)}`}>
      </iframe>
    </Fragment>
  )
}


export default EmbedMap;