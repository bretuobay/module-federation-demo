import React from "react";
import ReactDOM from "react-dom";
import Articles from "./components/Articles";
import Histogram from "./components/Histogram";

import "./index.css";

const App = () => (
  <div className="container">
    <div>
      Name: knx-components exposes only components needed by other application
    </div>

    <Histogram />

    <Articles />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
