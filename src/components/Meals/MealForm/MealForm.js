import React from "react";

import Button from "../../../UI/Button/Button";

import classes from "./MealForm.module.css";

const MealForm = (props) => {
  return (
    <form className={classes["meal-item-quantity"]}>
      <Button type='button' className={classes["meal-item-add"]}>+</Button>
      <input
        className={classes["meal-item-input"]}
        type="number"
        min="1"
        max="999"
        step="1"
      />
      <Button type='button' className={classes["meal-item-remove"]}>-</Button>
    </form>
  );
};

export default MealForm;
