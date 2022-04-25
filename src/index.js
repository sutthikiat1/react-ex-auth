import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./routes/Router";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

reportWebVitals();
