import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { router } from "../src/Router/Router";
import "./helpers/axios/axios";
import { Provider } from "react-redux";
import { store } from "./store";
// import AuthContextProvider from "./AuthContext/AuthContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
reportWebVitals();
