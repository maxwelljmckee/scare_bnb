import React, { Fragment, useEffect } from 'react';
import EmbedMap from '../EmbedMap'

const ListingsIdx = () => {

  useEffect(() => {
    // const res = fetch('')
  }, [])

  return (
    <Fragment>
      <EmbedMap queryString='59 cdear avenue montclair nj' />
    </Fragment>
  )
}

export default ListingsIdx;