import React from 'react'
import './CSS/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className='contact'>
      <h1>Feel free to visit us</h1>
      <p><FontAwesomeIcon icon={faMapMarkerAlt} />  Beuta Paints Company, Opposite Zetech University</p>
      <p><FontAwesomeIcon icon={faEnvelope} />  beutapaints@gmail.com</p>
      <p><FontAwesomeIcon icon={faPhone} />  (+254) 0724330978</p>
    </div>
  )
}

export default Contact

