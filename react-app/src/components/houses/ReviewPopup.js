import React, { useState } from 'react';
import { Dialog } from '@material-ui/core';
import WriteHouseReview from './WriteReview'

const ReviewPopup = (props) => {

    const [open, setOpen] = useState(false)

    const handleOpenClick = (e) => {
        e.preventDefault()
        setOpen(true)
    };

    const handleCloseClick = (e) => {
        e.preventDefault()
        setOpen(false)
    }

    return (
        <>
        <button onClick={handleOpenClick}>Write Review</button>
        <Dialog open={open} onClose={handleCloseClick}>
            <WriteHouseReview />
        </Dialog>
        </>
    )
}

export default ReviewPopup;
