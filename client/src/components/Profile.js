import React from 'react';
import { connect } from 'react-redux';
import Hoc from '../hoc/hoc';

const Profile = ({ username }) => {
  return (
    <div className='contact-profile'>
      {username !== null ? (
        <Hoc>
          <img src='http://emilcarlsson.se/assets/harveyspecter.png' alt='' />
          <p>{username}</p>
          <div className='social-media'>
            <i className='fa fa-facebook' aria-hidden='true' />
            <i className='fa fa-twitter' aria-hidden='true' />
            <i className='fa fa-instagram' aria-hidden='true' />
          </div>
        </Hoc>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    username: state.username
  };
};

export default connect(mapStateToProps)(Profile);
