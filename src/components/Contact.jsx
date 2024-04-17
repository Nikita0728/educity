import React from 'react'
import './Styles.css'
import msg_icon from '../assets/edusity_assets/msg-icon.png'
import email_icon from '../assets/edusity_assets/mail-icon.png'
import phone_icon from '../assets/edusity_assets/phone-icon.png'
import location_icon from '../assets/edusity_assets/location-icon.png'
import white_arrow from '../assets/edusity_assets/white-arrow.png'
export const Contact = () => {
  return (
 <>
 <hr/>
<div className=' new div-right'>
 <h3>Contact Us</h3>        </div>

 <div className="contact">
        <div className="contactcol">
            <h5> Send us a message. <img src={msg_icon}/></h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ex obcaecati optio pariatur facilis molestiae, officiis ducimus. Dolor, delectus fugit!</p>
            <ul>
                <li><img src={email_icon}/>xyz@blablabla.dev</li>
                <li><img src={phone_icon}/>+1 234-456-7890</li>
                <li><img src={location_icon}/>123, Main Street, New York, USA</li>
            </ul>
        </div>
        <div className="contactcol">
            <form>
                <label>Your name</label>
            <input type='text' name='name' placeholder='Enter your name' required></input>
            <label>Your email</label>
            <input type='mail' name='mail' placeholder='Enter your email' required/>
            <label>Your contact-no</label>

            <input type='tel'name='phone' placeholder='Enter your contact number' required/>
            <label>Your message</label>
           <textarea name='msg' rows ='6' col='10' placeholder='Enter your message'required></textarea>
           <button type='submit' className='see-more-button'> Submit now<img src={white_arrow}/></button>
            </form>
        </div>
        </div>
    </>
  )
}
