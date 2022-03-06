import React from "react";

const CartContext = React.createContext({
    products: [],
    getTotalOrder: () => {},
    getQuantityProducts: () => {},
    addProduct: (product) => {},
    removeProduct: (product) => {}
  });

export default CartContext;