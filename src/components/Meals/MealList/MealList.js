import React from "react";

import Card from "../../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";

import classes from "./MealList.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    title: "Sushi",
    ingredients: "Finest fish and veggies",
    price: 22.99
  },
  {
    id: "m2",
    title: "Schnitzel",
    ingredients: "A german specialty!",
    price: 16.5
  },
  {
    id: "m3",
    title: "Barbecue Burger",
    ingredients: "American, raw, meaty",
    price: 12.99
  },
  {
    id: "m4",
    title: "Green Bowl",
    ingredients: "Healthy...and green...",
    price: 18.99
  }
];

const MealList = (props) => {
  return (
    <Card className={classes["meal-list-container"]}>
      <ul className={classes["meal-list"]}>
        {DUMMY_MEALS.map((meal) => {
          return (
            <MealItem
              key={meal.id}
              id={meal.id}
              title={meal.title}
              ingredients={meal.ingredients}
              price={meal.price}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default MealList;
