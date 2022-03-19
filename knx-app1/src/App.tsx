import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

import "./index.css";

const SharedHeader = React.lazy(() => import("knx_header/Header"));

const SharedFooter = React.lazy(() => import("knx_footer/Footer"));

const Articles = React.lazy(() => import("knx_components/Articles"));

const Histogram = React.lazy(() => import("knx_components/Histogram"));

// Load LineBarAreaComposedChart
const LineBarAreaComposedChart = React.lazy(
  () => import("knx_components/LineBarAreaComposedChart")
);

const App = () => (
  <React.Fragment>
    <React.Suspense fallback="Loading Header">
      <SharedHeader>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/my-region">My region</Link>
        </li>
        <li>
          <Link to="/maintenance">Maintenance</Link>
        </li>
      </SharedHeader>
    </React.Suspense>
    <div className="container">
      <Routes>
        <Route
          path="/dashboard"
          element={
            <>
              <React.Suspense fallback="loading...">
                <Histogram />
              </React.Suspense>

              <React.Suspense fallback="loading...">
                <LineBarAreaComposedChart />
              </React.Suspense>
            </>
          }
        />
        <Route
          path="/my-region"
          element={
            <React.Suspense fallback="loading...">
              <Articles theme={{ backgroundColor: "#a2d2ff" }} />
            </React.Suspense>
          }
        />
        <Route
          path="/maintenance"
          element={
            <React.Suspense fallback="loading...">
              <Articles theme={{ backgroundColor: "#f9c74f" }} />
            </React.Suspense>
          }
        />
      </Routes>
    </div>
    <React.Suspense fallback="Loading Footer">
      <SharedFooter> I am footer content from application 1 </SharedFooter>
    </React.Suspense>
  </React.Fragment>
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
