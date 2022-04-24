import React, { memo } from "react";
import cw from "../assets/cw_logo.png";

//?React memo buradaki component i hafızaya alıyor ve bir değişiklik yoksa render etmiyor.Değişiklik olduğunda ama render ediyor, akıllı paşam :) Bunun üç yöntemi var 


//!BİRİNCİ YÖNTEM 
//React.memo ile componenti sarmalla
/* const Header = React.memo(({ img }) => {
  console.log("Header Rendered");
  return (
    <div className="header">
      <img
        src={img ? img : cw}
        alt="cw_logo"
        style={{ margin: "1rem", maxHeight: "200px" }}
      />
    </div>
  );
});

export default Header; */


//!İKİNCİ YÖNTEM 
/* //memo ile componenti sarmalla ama yukarıda react tan memo destructure ederek import et
 const Header = memo(({ img }) => {
  console.log("Header Rendered");
  return (
    <div className="header">
      <img
        src={img ? img : cw}
        alt="cw_logo"
        style={{ margin: "1rem", maxHeight: "200px" }}
      />
    </div>
  );
});

export default Header; */


//!ÜÇÜNCÜ YÖNTEM 
 //export etmeden componenti memo ile sarmalla
 const Header = ({ img }) => {
  console.log("Header Rendered");
  return (
    <div className="header">
      <img
        src={img ? img : cw}
        alt="cw_logo"
        style={{ margin: "1rem", maxHeight: "200px" }}
      />
    </div>
  );
};

export default memo(Header);  



