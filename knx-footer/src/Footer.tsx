import React from 'react';
import "./styles/Footer.css";

export default function Footer({children, theme}: {children?: React.ReactNode, theme?: React.CSSProperties}) {

    const year = new Date().getFullYear();

    return <footer className='footer' style={{...theme}}>
       { children && <div>{children}</div>}
         @Copyright {year}
     </footer>
}