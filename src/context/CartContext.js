import React from "react";

const CartContext = React.createContext({
    products: [],
    getTotalOrder: () => {},
    addProduct: (product) => {},
    removeProduct: (product) => {}
  });

export default CartContext;