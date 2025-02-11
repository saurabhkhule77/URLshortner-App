import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import ThemeProvider from "./Context";
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
import store from "./store";
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
