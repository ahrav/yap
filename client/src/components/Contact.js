import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = props => {
  return (
    <NavLink to={`${props.chatURL}`} style={{ color: '#fff' }}>
      <li className='contact'>
        <div className='wrap'>
          <span className='contact-status online' />
          <img src={props.picUrl} />
          <div className='meta'>
            <p className='name'>{props.name}</p>
            <p className='preview'>You just got LITT up, Mike.</p>
          </div>
        </div>
      </li>
    </NavLink>
  );
};

export default Contact;
