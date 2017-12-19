import React from 'react';
import classes from './Logo.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => (
  <div className={classes.logo} style={{height: props.height}}>
    <img src={burgerLogo} alt="logo" />
  </div>
);

export default logo;