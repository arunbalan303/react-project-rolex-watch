import React from "react";
import "./navbar.css";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          STORE
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i style={{color:"black",fontSize:50,marginTop:7}} className=" fas fa-cart-plus"></i>
          </span>
          <span>{size}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <a href="/"> <i style={{marginTop:29,position:"absolute"}} className="h" class="fa-2xl fa-solid fa-right-from-bracket"></i></a>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;