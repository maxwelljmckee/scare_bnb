import React from 'react';


const Rating = ({ reviews, rating }) => {
  let average;
  if (reviews) {
    (() => {
      let sum = 0.0;
      reviews.forEach(review => sum += review.rating);
      average = Math.round((sum / reviews.length) * 10) / 10
    })()
  }

  return (
    <div className='rating-container'>
      {average &&
        <div className='average-rating'>
          <i className="fas fa-ghost"></i>
          <div>- {average}</div>
        </div>
      }
      {rating >=1 &&
        <i className="fas fa-ghost"></i>
      }
      {rating >=2 &&
        <i className="fas fa-ghost"></i>
      }
      {rating >=3 &&
        <i className="fas fa-ghost"></i>
      }
      {rating >=4 &&
        <i className="fas fa-ghost"></i>
      }
      {rating >=5 &&
        <i className="fas fa-ghost"></i>
      }
    </div>
  )
}


export default Rating;