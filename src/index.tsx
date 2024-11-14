import React from "react";
import ReactDOM from "react-dom/client";
import { Maine } from "main";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Maine />
  </React.StrictMode>
);
