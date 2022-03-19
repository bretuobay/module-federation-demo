import React from "react";
import ReactDOM from "react-dom";

import importRemote from "./importRemote";

// Should we allow props ?
const Shell = ({ widget, ...props }) => {
  const url = "http://local.fuse-tenant1.mt-sb.konux-dev.de:3000";
  const Component = React.lazy(() => importRemote(url, "olympui", widget));

  return (
    <div className="olymp-App">
      <React.Suspense fallback={"LOADING..."}>
        <Component {...props} />
      </React.Suspense>
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
        KONUX
      </div>
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
