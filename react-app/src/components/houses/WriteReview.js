import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import GhostRating from './GhostRating'


const WriteHouseReview = ({ user }) => {
    const history = useHistory()
    const [errors, setErrors] = useState([]);
    const { id } = useParams()


    // SET STATE FOR FORM FIELDS
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');


    useEffect(() => {

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newReview = {
            // user,
            // userId: user.id,
            userId: 1,
            // house_id
            rating,
            comment
        };

        await fetch(`/api/houses/${id}/reviews`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newReview)
        });

        history.push('/');
        return
    }

    return (
        <form className='write-review-form' onSubmit={handleSubmit}>
            <div className="write-review-form__top">
                <div>
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
                <GhostRating setRating={setRating} rate={rating} />
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
                />
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )

}


export default WriteHouseReview;
