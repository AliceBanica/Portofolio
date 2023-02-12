import React from 'react'
import './Contact.css';
import locationImg from '../Images/location-ping.png';
import phoneImg from '../Images/phone.png';
import emailImg from '../Images/email.png';
const Contact = () => {
  return (
    <div className='contact-section' id='contact'>
            <div className = 'contact-container'>
                  <p className='contact-title'>Contact</p>
                  <div className='info-container'>
                        <div className='address-info'>
                              <img src = {locationImg} alt=''/>
                              <p className='contact-desc'>ADDRESS</p>
                              <p className='contact-me'>Bucharest, Romania</p>
                        </div>
                        <div className='phone-info'>
                              <img src = {phoneImg} alt=''/>
                              <p className='contact-desc'>PHONE</p>   
                              <p className='contact-me'>0734 878 985</p>
                        </div>
                        <div className='email-info'>
                              <img src = {emailImg} alt=''/>
                              <p className='contact-desc'>EMAIL</p>
                              <p className='contact-me'>banica.alice@gmail.com</p>
                        </div>
                  </div>
            </div>
       
    </div>
  )
}

export default Contact
