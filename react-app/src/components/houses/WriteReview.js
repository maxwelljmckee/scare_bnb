import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import GhostRating from './GhostRating'


const WriteHouseReview = ({ user, handleClose, reviews, setReviews }) => {
    const history = useHistory()
    const [errors, setErrors] = useState([]);
    const { id } = useParams()


    // SET STATE FOR FORM FIELDS
    const [rating, setRating] = useState(1);
    const [comment, setComment] = useState('');


    // useEffect(() => {

    // }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const newReview = {
            userId: user.id,
            house_id: id,
            rating: rating,
            comment: comment
        };

        const res = await fetch(`/api/houses/${id}/reviews`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newReview)
        });
        const data = await res.json()

        // history.push('/');
        handleClose(e)
        setReviews([data, ...reviews])
        return
    }

    return (
        <div className="write-review-container">
            <form className='write-review-form' onSubmit={handleSubmit}>
                <div className="write-review-form__top">
                    <div className="write-review-header">
                        <h1>Write a Review</h1>
                    </div>
                </div>
                {errors.length !== 0 && (
                    <div className="write-review-form__errors">
                        {errors.map((error) => (
                            <div>{error}</div>
                        ))}
                    </div>
                )}
                <div>
                    {/* Star Rating goes here */}
                    <GhostRating setRating={setRating} rating={rating} />
                    {/* <input type="number"
                        name="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        ></input> */}
                </div>
                <div>
                    <textarea
                        rows="50"
                        cols="50"
                        name='comment'
                        placeholder='Write your review...'
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />
                </div>
                <div className="write-review-submit-container">
                    <button className="write-review-submit" type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )

}


export default WriteHouseReview;
