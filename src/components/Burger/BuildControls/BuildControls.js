import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Lettuce', type: 'lettuce' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
  <div className={classes.build_controls}>
    <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
        key={ctrl.label}
        label={ctrl.label}
      />
    ))}
    <button
      className={classes.order_button}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >ORDER NOW
    </button>
  </div>
);

export default buildControls;
