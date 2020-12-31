import React, { useState } from 'react'

import { Dialog, DialogContent, DialogTitle } from '@material-ui/core'


function AmenityItem({ amenity }) {
  return (
    <div>
      <i className={amenity.icon} />
      <span>{amenity.amenity_name}</span>
    </div>
  )
}


function AmenityDialog(props) {
  const amenities = props.amenities
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      onClick={props.onClose}
    >
      <DialogTitle id="amenities-dialog-title">Amenities</DialogTitle>
      <DialogContent>
        {amenities.map(amenity => {
          return <AmenityItem amenity={amenity} />
        })}
      </DialogContent>
    </Dialog>
  )
}


export default function AmenitiesList({ house, house: { amenities } }) {
  const [showList, setShowList] = useState(false)

  const mainAmenities = amenities.length > 6 ? amenities.slice(0, 7) : amenities

  const handleOpen = (e) => {
    e.preventDefault()
    setShowList(true)
  }

  const handleClose = (e) => {
    e.preventDefault()
    setShowList(false)
  }

  return (
    <div>
      {mainAmenities.map(amenity => {
        return <AmenityItem key={`AmenityItem-${amenity.id}`} amenity={amenity} />
      })}

      {amenities.length > 6 && (
        <button onClick={handleOpen}>Show all {amenities.length} amenities</button>
      )}

      <AmenityDialog
        open={showList}
        onClose={handleClose}
        amenities={amenities}
      />

    </div>
  )
}
