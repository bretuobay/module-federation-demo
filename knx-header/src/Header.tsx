import React from "react";
import "./styles/Header.css";
import ImageLogo from "./logo.png";

const svgStyles = { maxWidth: "100px", maxHeight: "50px" } as const;

function Header({
  children,
  theme,
}: {
  children?: React.ReactNode;
  theme?: React.CSSProperties;
}) {
  return (
    <header className="header" style={{ ...theme }}>
      <img src={ImageLogo} style={{ ...svgStyles }} />
      <ul style={{ ...theme }}>{children}</ul>
    </header>
  );
}

export default Header;
