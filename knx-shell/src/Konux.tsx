import React from "react";
import ReactDOM from "react-dom";

import importRemote from "./importRemote";

// Props will probably have to handle authentication tokens etc ...
const Shell = ({ widget, ...props }) => {
  const url = "http://localhost:8083";

  const Component = React.lazy(() =>
    importRemote(url, "knx_components", widget)
  );

  return (
    <div className="olymp-App">
      <div
        style={{
          backgroundColor: "navy",
          width: "100%",
          height: 20,
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        I am a widget from KONUX
      </div>
      <React.Suspense fallback={"LOADING..."}>
        <Component {...props} />
      </React.Suspense>
    </div>
  );
};

const Konux = {
  render: (widget: string, elementId: string, props?: Record<any, any>) => {
    ReactDOM.render(
      <Shell widget={widget} {...props} />,
      document.getElementById(elementId)
    );
  },
};

window["Konux"] = Konux;
