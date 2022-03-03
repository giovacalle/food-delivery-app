import React from "react";

import Button from "../../../UI/Button/Button";

import classes from "./MealItem.module.css";

import mealsImage from "../../../assets/pizza.jpg";
import MealForm from "../MealForm/MealForm";

const MealItem = (props) => {
  return (
    <li className={classes["meal-item"]}>
      <div className={classes["meal-item-description"]}>
        <img
          className={classes["meal-item-img"]}
          src={mealsImage}
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
      <MealForm />
    </li>
  );
};

export default MealItem;
