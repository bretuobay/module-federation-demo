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
            <Link to="/general-news">General News</Link>
          </li>
          <li>
            <Link to="/fashion">Fashion</Link>
          </li>
          <li>
            <Link to="/culture">Culture</Link>
          </li>
          <li>
            <Link to="/entertainment">Politics</Link>
          </li>
          <li>
            <Link to="/sports">Sports</Link>
          </li>
        </SharedHeader>
      </React.Suspense>

      <Routes>
        <Route
          path="/general-news"
          element={
            <React.Suspense fallback="loading...">
              <Articles theme={{ backgroundColor: "#f5f5f5" }} />
            </React.Suspense>
          }
        />
        <Route
          path="/fashion"
          element={
            <React.Suspense fallback="loading...">
              <Articles theme={{ backgroundColor: "#a2d2ff" }} />
            </React.Suspense>
          }
        />
        <Route
          path="/culture"
          element={
            <React.Suspense fallback="loading...">
              <Articles theme={{ backgroundColor: "#f9c74f" }} />
            </React.Suspense>
          }
        />
        <Route
          path="/entertainment"
          element={
            <React.Suspense fallback="loading...">
              <Articles theme={{ backgroundColor: "#4d908e" }} />
            </React.Suspense>
          }
        />
        <Route
          path="/sports"
          element={
            <React.Suspense fallback="loading...">
              <Articles theme={{ backgroundColor: "#55a630" }} />
            </React.Suspense>
          }
        />
        <Route path="about" element={<div />} />
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
