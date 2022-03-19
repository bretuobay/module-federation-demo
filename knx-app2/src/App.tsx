import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

import "./index.css";

const SharedHeader = React.lazy(() => import("knx_header/Header"));

const SharedFooter = React.lazy(() => import("knx_footer/Footer"));

const Articles = React.lazy(() => import("knx_components/Articles"));

const App = () => (
  <React.Fragment>
    <div className="container">
      <React.Suspense fallback="Loading Header">
        <SharedHeader theme={{ backgroundColor: "#1EC0E3;" }}>
          <li>
            <Link to="/product2-dashboard">Product 2 dashboard</Link>
          </li>
          <li>
            <Link to="/product2-regions">Product 2 regions</Link>
          </li>

          <li>
            <Link to="/product2-miscellaneous">Product 2 miscellaneous</Link>
          </li>
        </SharedHeader>
      </React.Suspense>

      <Routes>
        <Route
          path="/product2-dashboard"
          element={
            <React.Suspense fallback="loading...">
              <Articles theme={{ backgroundColor: "#f5f5f5" }} />
            </React.Suspense>
          }
        />
        <Route
          path="/product2-regions"
          element={
            <React.Suspense fallback="loading...">
              <Articles theme={{ backgroundColor: "#a2d2ff" }} />
            </React.Suspense>
          }
        />

        <Route
          path="/product2-miscellaneous"
          element={
            <React.Suspense fallback="loading...">
              <Articles theme={{ backgroundColor: "#4d908e" }} />
            </React.Suspense>
          }
        />

        <Route
          path="about-us"
          element={
            <div
              style={{
                height: "600px",
                textAlign: "center",
                margin: "auto",
              }}
            >
              We are awesome!
            </div>
          }
        />
      </Routes>

      <React.Suspense fallback="Loading Footer">
        <SharedFooter theme={{ backgroundColor: "#1EC0E3;" }}>
          I am footer content from application 2. I am more than a footer. I am
          a footer. A great footer.
        </SharedFooter>
      </React.Suspense>
    </div>
  </React.Fragment>
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
