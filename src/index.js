import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import CartProvider from './context/CartProvider';

import './index.css';

ReactDOM.render(<CartProvider><App /></CartProvider>, document.getElementById('root'));