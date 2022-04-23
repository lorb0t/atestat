import React, { Suspense } from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createRoot } from "react-dom/client";

import "./i18n";

const container = document.getElementById("root");
const root = createRoot(container);

const loaderStyle = {
  background: "gray",
};

const Loader = (
  <div style={loaderStyle}>
    <h1 style={{ color: "white" }}>Loading...</h1>
  </div>
);

root.render(
  <Suspense fallback={Loader}>
    <App />
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
