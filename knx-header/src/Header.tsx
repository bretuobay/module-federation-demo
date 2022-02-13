

import React from "react";
import "./styles/Header.css";

 function Header({children, theme}: {children?: React.ReactNode, theme?: React.CSSProperties}) {
  return    (
    <header className='header' style={{...theme}}>
        <ul>
            {children}
        </ul>
    </header>
  )
}

export default Header;