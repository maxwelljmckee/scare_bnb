import React, { useState, useContext } from 'react';
import { Dialog } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';

import WriteHouseReview from './WriteReview';
// import LoginFormDialog from '../SplashPage/auth/LoginFormModal'
import LoginForm from '../SplashPage/auth/LoginFormModal/LoginForm'
import { context } from '../../App';

const ReviewPopup = (props) => {
    const userData = useContext(context)
    const { authenticated, setAuthenticated } = userData

    const [open, setOpen] = useState(false)
    const [openLogin, setOpenLogin] = useState(false);

    const user = props.user


    const handleCloseLogin = () => {
        setOpenLogin(false)
    }

    const handleOpenClick = (e) => {
        e.preventDefault()
        setOpen(true)
    };

    const handleCloseClick = (e) => {
        e.preventDefault()
        setOpen(false)
    }

    if (!authenticated) {

        return (
            <>
            <button className="write-review-button" onClick={handleOpenClick}>Write a Review</button>
            <Dialog
            open={open}
            onClose={handleCloseClick}
            >
                <DialogContent>
                    <LoginForm {...props} onClose={handleCloseLogin}/>
                </DialogContent>
            </Dialog>
            </>
        )
    }

    return (
        <>
        <div className="write-review-button-container">
            <button className="write-review-button" onClick={handleOpenClick}>Write a Review</button>
        </div>
        <Dialog open={open} onClose={handleCloseClick}>
            <WriteHouseReview user={user}/>
        </Dialog>
        </>
    )
}

export default ReviewPopup;
