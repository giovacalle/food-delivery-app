import React from "react";

const CartContext = React.createContext({
    products: [],
    getTotalOrder: () => {},
    getQuantityProducts: () => {},
    addProduct: (product) => {},
    setProduct: (product) => {},
    removeProduct: (product) => {},
    clearCart: () => {}
  });

export default CartContext;