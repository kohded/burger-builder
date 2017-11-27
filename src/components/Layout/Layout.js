import React from 'react';
import Div from '../../hoc/Div';
import classes from './Layout.css';

const layout = (props) => (
  <Div>
    <div>Toolbar, SideBar, Backdrop</div>
    <main className={classes.main}>
      {props.children}
    </main>
  </Div>
);

export default layout;
