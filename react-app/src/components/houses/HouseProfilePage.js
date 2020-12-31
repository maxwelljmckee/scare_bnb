import React from 'react';
import { useParams } from 'react-router-dom';

import WriteHouseReview from './WriteReview'
import ReviewPopup from './ReviewPopup'


const HouseProfilePage = () => {
  const { id } = useParams()

  return (
    <div style={{padding:"100px"}}>
      <ReviewPopup />
    </div>
  )
}


export default HouseProfilePage;
