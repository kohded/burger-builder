import React from 'react';
import classes from './Modal.css';
import Div from '../../../hoc/Div';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
  <Div>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className={classes.modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0',
      }}
    >
      {props.children}
    </div>
  </Div>
);

export default modal;
