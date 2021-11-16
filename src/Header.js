import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Currency Exchange <i className="fas fa-money-bill-wave" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/currency"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Currencies
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/favorites"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Favorites
              </Link>
            </li>
          </ul>

        </div>
      </nav>
    </>
  );
}

export default Header;
