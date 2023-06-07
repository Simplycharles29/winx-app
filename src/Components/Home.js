import React from 'react'
import home from '../images/home.png'

const Home = () => {
  return (
    <header id='/'>
      <div className="clip"></div>
      <div className="hero-flex">
      <div className="hero-text">
        <h2>Fresh & fast food <br /> street food</h2>
        <div className="hero-links">
        <a href="#">Order Now</a>
        <a href="#">Our Menu</a>
        </div>
      </div>
      <div className="hero-img">
        <img src={home} alt="" />
      </div>
      </div>
    </header>
  )
}

export default Home
