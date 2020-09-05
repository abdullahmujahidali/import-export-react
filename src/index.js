import React from "react";
import ReactDOM from "react-dom";
import PIE, { doublePi, triplePi } from "./math";

ReactDOM.render(
  <ul>
    <li>{PIE}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
