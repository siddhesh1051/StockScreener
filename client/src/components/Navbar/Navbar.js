import React from "react";
import "./Navbar.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      {/* <div className="navbar-container">
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
     */}

      <div className="navbar flex">
        <Link to="/home" className="nav-logo-container flex">StockFlipr</Link>
        <div className="nav-menu flex">
          <div className="dropdown nav-menu-item">
            <button class="dropbtn">Stocks

            </button>
            <div class="dropdown-content">
              <Link to="/home/RELIANCE">Reliance Inc</Link>
              <Link to="/home/ASHOKLEY">Ashok Leyland</Link>
              <Link to="/home/TATASTEEL">Tata Steel</Link>
              <Link to="/home/CIPLA">Cipla</Link>
              <Link to="/home/EICHERMOT">Eicher Motors</Link>
            </div>

          </div>
          <div className="dropdown nav-menu-item">
            <button class="dropbtn">Indices

            </button>
            <div class="dropdown-content">
              <Link to="/home/NSE">NSE</Link>
              <Link to="/home/BSE">BSE</Link>
            </div>

          </div>
          {/* <Link to="/index" className="nav-menu-item">Index</Link> */}
          <Link to="/about" className="nav-menu-item">About</Link>
          <Link to="/about" className="nav-menu-item">Contact Us</Link>
          {/* <Link to="/stocks" className="nav-menu-item">Stocks</Link> */}
          {/* <Link to="/index" className="nav-menu-item">Index</Link> */}
        </div>
        <div className="nav-login flex">
          <div className="nav-login-details flex">
            <div className="nav-login-pp"></div>
            <div className="nav-login-name">Sahil Kangane</div>
            <Link to="/" className="nav-logout flex">Logout</Link>
          </div>
        </div>
      </div>

    </>
  );
};

export default Navbar;
