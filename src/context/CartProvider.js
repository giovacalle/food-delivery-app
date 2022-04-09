import React, { useReducer } from "react";

import CartContext from "./CartContext";

const defaultCartState = {
  products: []
};
const cartReducer = (state, action) => {
  let productIndex;
  let updatedProducts = [...state.products];

  switch (action.type) {
    case "ADD":
      productIndex = updatedProducts.findIndex((item) => {
        return item.id === action.product.id;
      });

      const productToAdd = updatedProducts[productIndex];

      if (productToAdd) {
        updatedProducts[productIndex].quantity += action.product.quantity;
      } else {
        if (action.product.quantity !== 0) updatedProducts = updatedProducts.concat(action.product);
      }
      break;
    case "SET":
        productIndex = updatedProducts.findIndex((item) => {
          return item.id === action.product.id;
        });
    
        const productToSet = updatedProducts[productIndex];

        if (productToSet) {
          if (action.product.quantity > 0) {
            updatedProducts[productIndex].quantity = action.product.quantity;
          } else {
            updatedProducts = updatedProducts.filter(item => item.id !== action.product.id);
          }
        }
      break; 
    case "CLEAR":
    default:
      updatedProducts = [];
      break;
  }

  return {
    products: updatedProducts
  };
};

export const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addProductToCartHandler = (product) => {
    dispatchCartAction({ type: "ADD", product: product });
  };

  const setProductQuantityHandler = (product) => {
    dispatchCartAction({ type: "SET", product: product });
  };

  const removeProductFromCartHandler = (product) => {
    dispatchCartAction({ type: "REMOVE", product: product });
  };

  const cartClearHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const reduceTotalCart = () => {
    const totalAmount = cartState.products.reduce((prev, curr) => {
      return prev + curr.price * curr.quantity;
    }, 0);
    
    return totalAmount;
  };

  const reduceQuantityCart = () => {
    const totalAmount = cartState.products.reduce((prev, curr) => {
      return prev + curr.quantity;
    }, 0);

    return totalAmount;
  };

  const cartContext = {
    products: cartState.products,
    getTotalOrder: reduceTotalCart,
    getQuantityProducts : reduceQuantityCart,
    addProduct: addProductToCartHandler,
    setProduct: setProductQuantityHandler,
    removeProduct: removeProductFromCartHandler,
    clearCart: cartClearHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
