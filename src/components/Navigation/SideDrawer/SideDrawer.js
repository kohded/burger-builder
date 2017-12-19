import React from 'react';
import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Div from '../../../hoc/Div/Div';

const sideDrawer = (props) => {
  let attachedClasses = [classes.side_drawer, classes.close];
  if (props.open) {
    attachedClasses = [classes.side_drawer, classes.open];
  }

  return (
    <Div>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.logo}>
          {/*<Logo height="11%" />*/}
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Div>
  );
};

export default sideDrawer;
