import React, { useEffect, useState } from 'react'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// reviewdata
import { reviewdata } from './reviewdata';
// slider


const Review = () => {

    const [review, setReview] = useState([])

      useEffect(() =>{
        getReviews()
      }, [])
    
      const getReviews = () =>{
        setReview(reviewdata)
        console.log(reviewdata)
      }

  return (
    <section id='reviews'>
        <h2>Rev<span>iews</span></h2>
      <div className="reviews">
        {review.map(list =>{
            return  <div className='review SwiperSlide slide' key={list.id}>
                <div className="info-review">
                    <img src={list.image} alt="" />
                    <div className="info-review-name">
                        <h4>{list.name}</h4>
                        <div className="stars">
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStarHalfAlt} /></i>
                        </div>
                    </div>
                </div>
                <p>{list.text}</p>
            </div>
        })}
      </div>
    </section>
  )
}

export default Review
