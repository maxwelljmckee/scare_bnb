import React, { Fragment } from 'react';
require('dotenv').config()

const REACT_APP_MAPS_API_KEY = process.env.REACT_APP_MAPS_API_KEY

const EmbedMap = ({ queryString }) => {
  const encode = () => {
    const encoded = queryString.split().join('+')
    return encoded
  }
  
  return (
    <Fragment>
      <iframe
        title='googleMaps'
        width="1000"
        height="850"
        src={`https://www.google.com/maps/embed/v1/place?key=${REACT_APP_MAPS_API_KEY}&q=${encode(queryString)}`}>
      </iframe>
    </Fragment>
  )
}


export default EmbedMap;