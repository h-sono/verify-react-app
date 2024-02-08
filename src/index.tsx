import React from "react";
import ReactDOM from "react-dom";
import { Routing } from "./components/pageRouting/Routing.tsx";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
