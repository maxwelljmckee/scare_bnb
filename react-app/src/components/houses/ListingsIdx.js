import React, { Fragment, useEffect } from 'react';
// import EmbedMap from '../EmbedMap'
import WriteHouseReview from './WriteReview'

const ListingsIdx = () => {

  useEffect(() => {
    // const res = fetch('')
  }, [])

  return (
    <Fragment>
      {/* <EmbedMap queryString='59 cdear avenue montclair nj' /> */}
      <WriteHouseReview></WriteHouseReview>
    </Fragment>
  )
}

export default ListingsIdx;
