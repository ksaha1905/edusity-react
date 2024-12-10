import { useState } from "react";
import "./Contact.css";
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import arrow_icon from '../../assets/white-arrow.png'

const Contact = () => {

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="message icon" /></h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
            <li><img src={mail_icon} alt="mail icon" />contact@edusity.com</li>
            <li><img src={phone_icon} alt="mail icon" />+1 123-456-7890</li>
            <li><img src={location_icon} alt="mail icon" />77 Massachusetts, Cambridge<br/> MA 02193, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form >
            <label>Your name:</label>
            <input type="text" name="name" placeholder="Enter your name" required/>
            <label>Phone number:</label>
            <input type="tel" name="phone" placeholder="Enter your mobile number" required/>
            <label>Write your message here:</label>
            <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
            <button  className="btn dark-btn">Submit now <img src={arrow_icon} /></button>
        </form>
       
      </div>
    </div>
  );
};

export default Contact;
