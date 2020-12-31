import React from 'react';
import { useParams } from 'react-router-dom';


const HouseProfilePage = () => {
  const { id } = useParams()

  return (
    <div>{id}</div>
  )
}


export default HouseProfilePage;
