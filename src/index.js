import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Avatar from "./components/avatar";
import Count from "./components/counter";
import Person from "./components/person";
const name = "Juan";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Count />
    <Person />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
