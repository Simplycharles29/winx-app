import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart , faEye, faStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons'
import { menudata } from './menudata'

const Gallery = () => {

    const [gallery, setGallery] = useState([])

    useEffect(() =>{
        getGallery()
    }, [])

    const getGallery = () =>{
        setGallery(menudata)
    }

  return (
    <section id='gallery'>
      <h2>Gall<span>ery</span></h2>

      <div className="gallery">
        {gallery.map(list =>{
            return <div className="box">
            <a href="#" className='gallery-icon heart'> <FontAwesomeIcon icon={faHeart} /></a>
            <a href="#" className='gallery-icon eye'> <FontAwesomeIcon icon={faEye} /></a>
            <img src={list.image} alt="" />
            <h4>{list.name}</h4>
            <div className="stars">
                <i><FontAwesomeIcon icon={faStar} /></i>
                <i><FontAwesomeIcon icon={faStar} /></i>
                <i><FontAwesomeIcon icon={faStar} /></i>
                <i><FontAwesomeIcon icon={faStar} /></i>
                <i><FontAwesomeIcon icon={faStarHalfAlt} /></i>
            </div>
            <span>${list.price}</span>
            <a className='cart' href="#">Add to cart</a>
        </div>
        })}
        {/* <div className="box">
            <a href="#" className='gallery-icon heart'> <FontAwesomeIcon icon={faHeart} /></a>
            <a href="#" className='gallery-icon eye'> <FontAwesomeIcon icon={faEye} /></a>
            <img src={cheese} alt="" />
            <h4>cheese</h4>
            <div className="stars">
                <i><FontAwesomeIcon icon={faStar} /></i>
                <i><FontAwesomeIcon icon={faStar} /></i>
                <i><FontAwesomeIcon icon={faStar} /></i>
                <i><FontAwesomeIcon icon={faStar} /></i>
                <i><FontAwesomeIcon icon={faStarHalfAlt} /></i>
            </div>
            <span>$15.99</span>
            <a className='cart' href="#">Add to cart</a>
        </div> */}
      </div>
    </section>
  )
}

export default Gallery
