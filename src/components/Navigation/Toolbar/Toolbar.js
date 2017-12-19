import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
  <header className={classes.toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={classes.logo}>
      {/*<Logo height="80%" />*/}
      <Logo />
    </div>
    <nav className={classes.desktop_only}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
