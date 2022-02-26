import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    {/* wrapping App with Provider and passing store as props */}
    <App />
  </Provider>,
  document.getElementById("root")
);
