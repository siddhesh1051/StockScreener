import React from "react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
            <div className="logo-container">
                TrueStocker 
            </div>
            <div className="nav-menu">
                <div className="nav-menu-item">About</div>
                <div className="nav-menu-item">Stocks</div>
                <div className="nav-menu-item">Index</div>
            </div>
            <div className="login-menu">
                <div className="login-prof-pic"></div>
                <div className="login-prof-name">Sahil Kanganee</div>
            </div>
        </div>
    
    
    </>
  );
};

export default Navbar;
