import React, { useContext } from "react";

import classes from "./MealItem.module.css";

import MealForm from "../MealForm/MealForm";

import CartContext from '../../../context/CartContext';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (qnt) => {
    cartCtx.addProduct({
      id: props.id,
      title: props.title,
      ingredients: props.ingredients,
      price: props.price,
      quantity: qnt,
      img: props.img
    });
  };

  return (
    <li className={classes["meal-item"]}>
      <div className={classes["meal-item-description"]}>
        <img
          className={classes["meal-item-img"]}
          src={props.img}
          alt="food item of menu"
        />
        <section className={classes["meal-item-info"]}>
          <h4 className={classes["meal-item-title"]}>
            <span>{props.title}</span>
            <span
              className={classes["meal-item-price"]}
            >{` ${props.price.toFixed(2)} £`}</span>
          </h4>
          <p className={classes["meal-item-ingredients"]}>
            {`Ingredients: ${props.ingredients}`}
          </p>
        </section>
      </div>
      <MealForm onAddCart={addToCartHandler} cartQnt={props.quantity} />
    </li>
  );
};

export default MealItem;
