import React from 'react'
import chef from '../images/chef.png'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  return (
    <section id='about'>
      <h2>About <span>us</span></h2>
      <div className="about-flex">
        <div className="about-img">
            <img src={chef} alt="" />
        </div>
        <div className="about-text">
            <h2>What we do</h2>
            <p>Everything began in 1946 when the proprietor opened his first espresso and doughnut and sandwich shop. It was gigantically fruitful and this drove him to begin another shop called organization name. He opened the principal store in 1950 in Massachusetts in the USA.</p>
            <p>Today, <strong>winx</strong> can be found in 30 nations worldwide in excess of 10,000 areas. It has turned into the world’s driving pizza, snacks and coffee company serving in excess of 900 million doughnuts and 1.5 some espresso a year all-inclusive.</p>

            <a href="#">Read more <FontAwesomeIcon icon={faAngleRight} /></a>
        </div>
      </div>
    </section>
  )
}

export default About
