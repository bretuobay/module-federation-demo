import React from "react";
import ReactDOM from "react-dom";
import Articles from "./components/Articles";

import "./index.css";

const App = () => (
  <div className="container">
    <div>
      Name: knx-components exposes only components needed by other application
    </div>

    <Articles />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
