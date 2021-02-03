import React, { useState } from 'react';
import { Dialog } from '@material-ui/core';
import WriteHouseReview from './WriteReview';
// import LoginFormDialog from '../SplashPage/auth/LoginFormModal'
import LoginForm from '../SplashPage/auth/LoginFormModal/LoginForm'

const ReviewPopup = (props) => {

    const [open, setOpen] = useState(false)

    const user = props.user
    const authenticated = props.authenticated
    console.log(authenticated)

    const handleOpenClick = (e) => {
        e.preventDefault()
        setOpen(true)
    };

    const handleCloseClick = (e) => {
        e.preventDefault()
        setOpen(false)
    }

    // if (!user) {

    //     return (
    //         <>
    //         <button onClick={handleOpenClick}>Write a Review</button>
    //         <Dialog open={open} onClose={handleCloseClick}>
    //             <LoginForm {...props} />
    //         </Dialog>
    //         </>
    //     )
    // }

    return (
        <>
        <button onClick={handleOpenClick}>Write a Review</button>
        <Dialog open={open} onClose={handleCloseClick}>
            <WriteHouseReview user={user}/>
        </Dialog>
        </>
    )
}

export default ReviewPopup;
