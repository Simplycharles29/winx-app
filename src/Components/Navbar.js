import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)  
  

  return (
    <nav>
      <div className="web-title"><h2><a href="#">Winx</a></h2></div>
      <div className="bar" onClick={() => {setToggle(!toggle)}}>
        <a href="#"><FontAwesomeIcon icon={faBars} /></a>
      </div>
      <ul className={toggle ? 'active' : ''}>
        <a href="#/" onClick={() => setToggle(false)}>Home</a>
        <a href="#about" onClick={() => setToggle(false)}>About</a>
        <a href="#menu" onClick={() => setToggle(false)}>Menu</a>
        <a href="#gallery" onClick={() => setToggle(false)}>Gallery</a>
        <a href="#reviews" onClick={() => setToggle(false)}>Reviews</a>
        <a href="#contact" onClick={() => setToggle(false)}>Contact</a>
      </ul>
    </nav>
  )
}

export default Navbar
