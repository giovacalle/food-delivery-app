import React, { useEffect, useReducer } from "react";

import Button from "../../../UI/Button/Button";

import classes from "./MealForm.module.css";

const itemQuantityReducer = (state, action) => {
  let updateState = { quantity: state.quantity };

  switch (action.type) {
    case 'INPUT_CHANGE':
      const qntNew = parseInt(action.quantity);

      if (isNaN(qntNew)) return { quantity: state.quantity};

      updateState = { quantity: qntNew};
      break;
    case 'ADD':
      updateState = { quantity: state.quantity + 1};
      break;
    case 'REMOVE':
      const chkQntZero = state.quantity;

      if (chkQntZero <= 0) return { quantity: 0 };

      updateState = { quantity: state.quantity - 1};
      break;
    default:
      break;
  }

  return updateState;
};

const MealForm = ({ onAddCart, onRemoveCart, cartQnt }) => {
  const [itemQuantity, dispatchItemQuantity] = useReducer(itemQuantityReducer, { quantity: cartQnt ?? 0 });

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (itemQuantity.quantity > 0)
        onAddCart(itemQuantity.quantity);
      else
        onRemoveCart(itemQuantity.quantity);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [itemQuantity.quantity])

  const changeHandler = (event) => {
    dispatchItemQuantity({type: 'INPUT_CHANGE', quantity: event.target.value});
  };

  const submitAdd = () => {
    dispatchItemQuantity({type: 'ADD'});
  };

  const submitRemove = () => {
    dispatchItemQuantity({type: 'REMOVE'});
  };

  return (
    <form className={classes["meal-item-quantity"]}>
      <Button type='button' className={classes["meal-item-add"]} onClick={submitAdd}>+</Button>
      <input
        className={classes["meal-item-input"]}
        type="number"
        min="1"
        max="999"
        step="1"
        value={itemQuantity.quantity || ''}
        onChange={changeHandler}
      />
      <Button type='button' className={classes["meal-item-remove"]} onClick={submitRemove} disabled={itemQuantity.quantity <= 0}>-</Button>
    </form>
  );
};

export default MealForm;
