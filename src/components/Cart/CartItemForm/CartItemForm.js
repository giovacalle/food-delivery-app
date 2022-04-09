import React, { useEffect, useState } from "react";

import Button from "../../../UI/Button/Button";

import classes from "./CartItemForm.module.css";

const CartItemForm = ({ onModifyCart, cartQnt }) => {
  const [quantity, setQuantity] = useState(cartQnt);

  const quantityChangeHandler = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const addQuantityHandler = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const removeQuantityHandler = () => {
    setQuantity((prevState) => prevState - 1);
  };

  useEffect(() => {
    onModifyCart(quantity);
  }, [quantity]);

  const addToCartHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addToCartHandler} className={classes["meal-item-form"]}>
      <div className={classes["meal-item-quantity"]}>
        <Button type='button' className={classes["meal-item-add"]} onClick={addQuantityHandler}>+</Button>
        <input
          className={classes["meal-item-input"]}
          type="text"
          onChange={quantityChangeHandler}
          value={quantity}
        />
        <Button type='button' className={classes["meal-item-remove"]} onClick={removeQuantityHandler}>-</Button>
      </div>
    </form>
  );
};

export default CartItemForm;
