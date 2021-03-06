import React, { useState, useCallback, useEffect } from "react";

import Card from "../../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";

import classes from "./MealList.module.css";

const MealList = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMealsHandler = useCallback(async() => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://react-http-c3a9f-default-rtdb.firebaseio.com/meals.json');
      
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      
      const data = await response.json();

      let mealsFormatted = [];
      for (const meal in data) {
        mealsFormatted.push(data[meal]);
      }

      setMeals(mealsFormatted);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMealsHandler();
  }, [fetchMealsHandler]);

  return (
    <Card className={classes["meal-list-container"]}>
      <ul className={classes["meal-list"]}>
        { !isLoading && meals.length === 0 && !error && <p>Found no meals.</p> }
        { !isLoading && error && <p>{error}</p>}
        { isLoading && <p>Loading...</p> }
        { !isLoading && meals.length > 0 && meals.map((meal) => {
            return (
              <MealItem
                key={meal.id}
                id={meal.id}
                title={meal.title}
                ingredients={meal.ingredients}
                price={meal.price}
                img={meal.img}
              />
            );
          })
        }
      </ul>
    </Card>
  );
};

export default MealList;
