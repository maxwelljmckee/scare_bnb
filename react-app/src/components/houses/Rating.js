import React from 'react';


const Rating = ({ reviews, rating }) => {
  let average = 0;
  if (reviews && reviews.length) {
    (() => {
      let sum = 0.0;
      reviews.forEach(review => sum += review.rating);
      average = Math.round((sum / reviews.length) * 10) / 10
    })()
  }

  return (
    <div className='rating-container'>
      {average > 0 ?
        <div className='average-rating'>
          <i className="fas fa-ghost"></i>
          - {average}
        </div>
        :
        <>
        {!rating &&
          <div>Not Yet Rated</div>
        }
        </>
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