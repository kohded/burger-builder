import React from 'react';
import classes from './NavigationItem.css';

const naviationItem = (props) => (
  <li className={classes.navigation_item}>
    <a
      href={props.link}
      className={props.active ? classes.active : null}
    >{props.children}
    </a>
  </li>
);

export default naviationItem;
