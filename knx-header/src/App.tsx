import React from "react";
import ReactDOM from "react-dom";
import Header  from "./Header";
import "./index.css";

const App = () => (
  <div className="container">
<Header>
<ul>
    <li><a className="active" href="#home">Home</a></li>
    <li><a href="#news">News</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#about">About</a></li>

    </ul>
</Header>

  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
