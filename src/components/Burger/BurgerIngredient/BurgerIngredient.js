import React from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';

const burgerIngredient = (props) => {
  let ingredient = undefined;

  switch (props.type) {
    case ('bread_top'): {
      ingredient = <div className={classes.bread_top}>
        <div className={classes.seeds_1}></div>
        <div className={classes.seeds_2}></div>
      </div>;
      break;
    }
    case ('bread_bottom'): {
      ingredient = <div className={classes.bread_bottom}></div>;
      break;
    }
    case ('cheese'): {
      ingredient = <div className={classes.cheese}></div>;
      break;
    }
    case ('lettuce'): {
      ingredient = <div className={classes.lettuce}></div>;
      break;
    }
    case ('bacon'): {
      ingredient = <div className={classes.bacon}></div>;
      break;
    }
    case ('meat'): {
      ingredient = <div className={classes.meat}></div>;
      break;
    }
    default: {
      ingredient = undefined;
    }
  }

  return ingredient;
};

burgerIngredient.defaultProps = {
  type: '',
};

burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default burgerIngredient;
