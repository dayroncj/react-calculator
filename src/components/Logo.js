import React from 'react';
import '../css/Logo.css';

const Logo = ({ image }) => (
  <div className='logo-container'>
    <img src={image} className='logo' alt='Logo' />
  </div>
);

export default Logo;