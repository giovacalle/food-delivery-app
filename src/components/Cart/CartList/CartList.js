import React, { useContext } from "react";
import Button from "../../../UI/Button/Button";

import Modal from "../../../UI/Modal/Modal";
import MealItem from "../../Meals/MealItem/MealItem";

import CartContext from "../../../context/CartContext";

import classes from "./CartList.module.css";

const CartList = (props) => {
  const cartCtx = useContext(CartContext);

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
        <ul className={classes["cart-items"]}>
          {cartCtx.products.length > 0 ?            
            cartCtx.products.map((product) => {
            return (
              <MealItem
                key={product.id}
                id={product.id}
                title={product.title}
                ingredients={product.ingredients}
                price={product.price}
                quantity={product.quantity}
              />
            );
          }): <li>Your cart is empty.</li>}
        </ul>
      </div>
      <div className={classes["modal-footer"]}>
        <h3 className={classes["modal-footer-amount"]}>{`Total amount: ${cartCtx
          .getTotalOrder()
          .toFixed(2)} £`}</h3>
        {cartCtx.products.length > 0 ? <Button className={classes["modal-header-order"]}>Confirm order</Button> : null}
      </div>
    </Modal>
  );
};

export default CartList;
