import React from "react";

import Card from "../../../UI/Card/Card";

import classes from "./Hero.module.css";
import mealsImage from '../../../assets/meals-bg.jpg';

const Hero = (props) => {
  return (
    <React.Fragment>
      <img className={classes["hero-img"]} src={mealsImage} alt="background of food" />
      <Card className={classes["hero-container"]}>
        <section className={classes["section-hero"]}>
          <h2>Basic food delivery app :)</h2>
          <p>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </section>
      </Card>
    </React.Fragment>
  );
};

export default Hero;
