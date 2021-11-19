import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Navigation</h2>
            <Link to="/landing">Landing Page</Link>
            <Link to="/currency">Currencies</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to='/'> Currency Exchange <i className='fas fa-money-bill-wave' /> </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
