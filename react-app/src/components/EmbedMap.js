import React, { Fragment } from 'react';


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
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBWPv72iWYiEDzcxwy63ooJ7JC9obR8-iM&q=${encode(queryString)}`}>
      </iframe>
    </Fragment>
  )
}


export default EmbedMap;