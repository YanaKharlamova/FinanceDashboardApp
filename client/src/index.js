import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "@reduxjs/toolkit";// from "redux"
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import quotesReducer from "./redux/quotesReducer";

const store = configureStore({ reducer: quotesReducer }, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

