import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./store/index";
import { loginSuccess } from "./actions/authentication";
import * as serviceWorker from "./serviceWorker";

const mmToken = localStorage.getItem("mm_token");
if (mmToken) {
  store.dispatch(loginSuccess(mmToken));
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
