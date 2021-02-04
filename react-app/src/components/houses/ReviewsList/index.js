import React, { useState } from 'react';

import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import Rating from '../Rating';



function ListingReview({ review }) {
    return (
        <div className='review-listing'>
            <div className="user-review-info">
                <Rating rating={review.rating} />
                <div className="user-review-comment">
                    <span>{review.comment}</span>
                </div>
                <div className="user-info">
                    {/* <img className="user-review-profile-pic" src={review.user.profile_pic_url}/> */}
                    <span>- {review.user.first_name}</span>
                </div>
            </div>
        </div>
    )
}

function ReviewDialog(props) {
    const reviews = props.reviews
    return (
        <Dialog
        open={props.open}
        onClose={props.onClose}
        onClick={props.onClose}
        >
            <DialogTitle id="reviews-dialog-title">Reviews</DialogTitle>
            <DialogContent>
                {reviews.map(review => {
                    return <ListingReview key={review.id} review={review}/>
                })}
            </DialogContent>
        </Dialog>
    )
}


export default function ReviewsList({ reviews }) {
    const [showList, setShowList] = useState(false)

    const mainReviews = reviews.length > 6 ? reviews.slice(0,6) : reviews

    const handleOpen = (e) => {
        e.preventDefault()
        setShowList(true)
    }

      const handleClose = (e) => {
        e.preventDefault()
        setShowList(false)
    }

    if (reviews.length === 0) {
        return (
            <div id="no-reviews-div">
                <h2>No reviews (yet)</h2>
            </div>
        )
    }

    if (reviews.length <= 6) {
        return (
            <div className="house-reviews-container">
                {mainReviews.map(review => {
                    return <ListingReview key={`ListingReview-${review.id}`} review={review}/>
                })}
            </div>
        )
    }

    return (
        <div>
            <div className="house-reviews-container">
                {mainReviews.map(review => {
                    return <ListingReview key={`ListingReview-${review.id}`} review={review}/>
                })}
            </div>

            {reviews.length > 6 && (
                <div className="show-all-reviews-container">
                    <button className="show-all-reviews-button" onClick={handleOpen}>Show all {reviews.length} reviews</button>
                </div>
            )}

            <ReviewDialog
            open={showList}
            onClose={handleClose}
            reviews={reviews}
            />
        </div>
    )
}
