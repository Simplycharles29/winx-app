import React from 'react'
import contact from '../images/contact.png'

const Contact = () => {
  return (
    <section id='contact'>
      <h2>Cont<span>act</span></h2>

      <div className="contact">
        <img src={contact} alt="" />

        <form action="." method="post">
            <div className="inputBox">
                <label htmlFor="Name">Name:</label>
                <div className="name">
                    <input type="text" placeholder='First' name='first' required/>
                    <input type="text" placeholder='Last' name='last' required/>
                </div>
                <div className="inputBox">
                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder='Email' name='email' required/>
                </div>
                <div className="inputBox">
                    <label htmlFor="phone">Phone:</label>
                    <input type="number" placeholder='Phone Number' name='phone' required/>
                </div>
                <div className="inputBox">
                    <label htmlFor="">Have you tasted our pizza?</label>
                    <div className="flex-choice">
                    <div className="choice">
                    <input type="radio" name="yes" />
                    <span>Yes</span>
                    </div>
                    <div className="choice">
                    <input type="radio" name="no" />
                    <span>No</span>
                    </div>
                    </div>
                </div>
                <div className="inputBox">
                    <label htmlFor="message">What can we do for you?</label>
                    <textarea name="message" cols="30" rows="10"></textarea>
                </div>
                <div className="button">
                    <a href="#">Submit</a>
                </div>
            </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
