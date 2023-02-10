import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact-section' id='contact'>
        <div className = 'contact-container'>
        <p className='contact-title'>Contact</p>
        <div className='info-container'>
          <div className='address-info'>
                <img src = 'https://cdn1.iconfinder.com/data/icons/aami-web-internet/64/aami2-35-128.png' alt=''/>
                <p className='contact-desc'>ADDRESS</p>
                <p className='contact-me'>Bucharest, Romania</p>
          </div>
          <div className='phone-info'>
                <img src = 'https://cdn1.iconfinder.com/data/icons/aami-web-internet/64/aami16-21-128.png' alt=''/>
                <p className='contact-desc'>PHONE</p>   
                <p className='contact-me'>0734 878 985</p>
          </div>
          <div className='email-info'>
                <img src = 'https://cdn0.iconfinder.com/data/icons/aami-web-internet/64/simple-22-128.png' alt=''/>
                <p className='contact-desc'>EMAIL</p>
                <p className='contact-me'>banica.alice@gmail.com</p>
          </div>
    </div>
</div>
       
    </div>
  )
}

export default Contact
