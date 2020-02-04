import React from 'react';

const ContactCard = (props) => {

  return (
    <div class="contact-details__card">
      <img src={props.imgUrl} alt=""/>
      <p>{props.name}</p>
    </div>
  )
}

export default ContactCard;

