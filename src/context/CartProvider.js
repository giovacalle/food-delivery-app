import React, { useReducer } from "react";

import CartContext from "./CartContext";

const defaultCartState = {
  products: []
};
const cartReducer = (state, action) => {
  let productIndex;
  let updatedProducts;

  switch (action.type) {
    case "ADD":
      productIndex = state.products.findIndex((item) => {
        return item.id === action.product.id;
      });

      const productToAdd = state.products[productIndex];
      updatedProducts = [...state.products];

      if (productToAdd) {
        updatedProducts[productIndex] = {
          ...productToAdd,
          quantity: action.product.quantity
        };
      } else {
        if (action.product.quantity !== 0) updatedProducts = state.products.concat(action.product);
      }
      break;
    case "REMOVE":
        productIndex = state.products.findIndex((item) => {
            return item.id === action.product.id;
        });
    
        const productToRemove = state.products[productIndex];
        updatedProducts = [...state.products];

        if (productToRemove) {
          if (action.product.quantity > 0) {
            updatedProducts[productIndex] = {
                ...productToRemove,
                quantity: action.product.quantity
            };
          } else {
            updatedProducts = updatedProducts.filter(item => item.id !== action.product.id);
          }
        }
      break; 
    default:
      updatedProducts = defaultCartState;
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

  const removeProductFromCartHandler = (product) => {
    dispatchCartAction({ type: "REMOVE", product: product });
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
    removeProduct: removeProductFromCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
