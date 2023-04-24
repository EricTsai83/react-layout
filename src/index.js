import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import Home from "./pages/Home"; // 如果把component宣告成index.js的話，是不需要把他打出來的

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
