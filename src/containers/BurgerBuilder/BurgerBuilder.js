import React, { Component } from 'react';
import Div from '../../hoc/Div';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    }
  };

  render() {
    return (
      <Div>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Div>
    );
  }
}

export default BurgerBuilder;
