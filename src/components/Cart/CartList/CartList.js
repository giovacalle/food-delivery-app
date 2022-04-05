import React, { useContext, useState } from "react";
import Button from "../../../UI/Button/Button";

import Modal from "../../../UI/Modal/Modal";
import MealItem from "../../Meals/MealItem/MealItem";
import CartCheckout from '../CartCheckout/CartCheckout';

import CartContext from "../../../context/CartContext";

import classes from "./CartList.module.css";

const CartList = (props) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [confirmOrder, setConfirmOrder] = useState(false);
  const cartCtx = useContext(CartContext);

  const confirmOrderHandler = () => {
    setConfirmOrder(true);
  };

  const submitOrderHandler = async (userData) => {
    setSubmitting(true);
    setDidSubmit(false);

    await fetch('https://react-http-c3a9f-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderItems: cartCtx.products
      })
    });

    setSubmitting(false);
    setDidSubmit(true);

    cartCtx.clearCart();
  };  

  const cartItems = 
    <>
      {confirmOrder ? 
        <CartCheckout onConfirm={submitOrderHandler} /> :
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
                img={product.img}
              />
            );
          }): <li className={classes["cart-item-empty"]}>Your cart is empty.</li>}
        </ul>
      }
    </>;

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
        { !isSubmitting && !didSubmit && cartItems }
        { isSubmitting && <p>Loading...</p> }
        { !isSubmitting && didSubmit && <p>Thank you for your order !</p> }
      </div>
      <div className={classes["modal-footer"]}>
        <h3 className={classes["modal-footer-amount"]}>
        {`Total amount: ${cartCtx
          .getTotalOrder()
          .toFixed(2)} £`}
        </h3>
        <div className={classes['modal-footer-actions']}>
          <Button className={classes["modal-footer-cancel"]} onClick={props.onClose}>Cancel</Button>
          {confirmOrder || <Button disabled={cartCtx.products.length <= 0} className={classes["modal-footer-order"]} onClick={confirmOrderHandler}>Confirm order</Button>}
        </div>
      </div>
    </Modal>
  );
};

export default CartList;
