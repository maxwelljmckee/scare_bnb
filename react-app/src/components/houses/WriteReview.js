import React, {useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';


const WriteHouseReview = () => {
    const history = useHistory()
    const [errors, setErrors] = useState([]);
    const [allStates, setAllStates] = useState([]);

    // SET STATE FOR FORM FIELDS
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');


    useEffect(() => {

    }, [])

    const handleSubmit = async () => {

        const newReview = {
            // user,
            // house_id
            rating,
            comment
        };

        await fetch('/api/houses/1/reviews', {
            method: 'POST',
            body: newReview
        });

        history.push('/');
        return
    }

    return (
        <>
        <h1></h1>
        <form className='write-review-form' onSubmit={handleSubmit}>
            <div>
                {errors.map((error) => (
                    <div>{error}</div>
                ))}
            </div>
            <div>
                {/* Star Rating goes here */}
            </div>
            <div>
                <textarea
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
        </>
    )

}


export default WriteHouseReview;
