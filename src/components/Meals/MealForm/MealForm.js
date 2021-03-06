import React, { useState } from "react";

import Button from "../../../UI/Button/Button";

import classes from "./MealForm.module.css";

const MealForm = ({ onAddCart, cartQnt }) => {
  const [quantity, setQuantity] = useState(1);

  const quantityChangeHandler = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const addQuantityHandler = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const removeQuantityHandler = () => {
    setQuantity((prevState) => prevState - 1);
  };

  const addToCartHandler = (event) => {
    event.preventDefault();

    onAddCart(quantity);

    setQuantity(1);
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
        <Button type='button' className={classes["meal-item-remove"]} onClick={removeQuantityHandler} disabled={quantity <= 1}>-</Button>
      </div>
      {!cartQnt && <Button type='submit'>Add to cart</Button> }
    </form>
  );
};

export default MealForm;
