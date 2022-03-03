import React from "react";
import CartButton from "../../Cart/CartButton/CartButton";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes["header"]}>
      <h2>MenuWithReact</h2>
      <CartButton onClick={props.onClick} />
    </header>
  );
};

export default Header;
