import React from 'react';
import classes from './DrawerToggle.css';

const drawerToggle = (props) => (
  <div onClick={props.clicked} className={classes.drawer_toggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;
