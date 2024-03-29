import React from "react";
import ReactDOM from "react-dom";
import Articles from "./components/Articles";
import Histogram from "./components/Histogram";
import LineBarAreaComposedChart from "./components/LineBarAreaComposedChart";

import "./index.css";

const App = () => (
  <div className="container">
    <div>
      Name: knx-components exposes only components needed by other application
    </div>

    <Histogram />
    <LineBarAreaComposedChart />
    <Articles />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
