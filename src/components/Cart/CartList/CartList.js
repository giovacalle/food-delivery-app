import React from "react";
import Button from "../../../UI/Button/Button";

import Modal from "../../../UI/Modal/Modal";
import MealItem from "../../Meals/MealItem/MealItem";

import classes from "./CartList.module.css";

const CartList = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes["modal-header"]}>
        <div className={classes["modal-header-description"]}>
          <h2 className={classes["modal-header-title"]}>Order checkout</h2>
        </div>
        <Button
          className={classes["modal-header-close"]}
          onClick={props.onClose}
        >
          X
        </Button>
      </div>
      <div className={classes["modal-body"]}>
        <ul className={classes['cart-items']}>
          <MealItem
            key="1"
            id="1"
            title="Prova"
            ingredients="Prova"
            price={18.22}
          />
        </ul>
      </div>
      <div className={classes["modal-footer"]}>
        <h3 className={classes["modal-footer-amount"]}>Total amount: 120 £</h3>
        <Button className={classes["modal-header-order"]}>Order</Button>
      </div>
    </Modal>
  );
};

export default CartList;
