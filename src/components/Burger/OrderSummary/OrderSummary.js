import React from 'react';
import Div from '../../../hoc/Div';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Div>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="danger" clicked={props.purchasedCancelled}>CANCEL</Button>
      <Button btnType="success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Div>
  );
};

export default orderSummary;
