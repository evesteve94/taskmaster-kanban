import React from "react";
import { Link } from "react-router-dom";
import { FaGear, FaCircleInfo } from "react-icons/fa6";

const Header = () => {
  return (
    <header>
      <Link to="/" className="header-link">
        <h1>Task Master</h1>
      </Link>
      <nav>
        <Link to="/info" className="info-link">
          {" "}
          <FaCircleInfo />
        </Link>
        <Link to="/settings" className="info-link">
          {" "}
          <FaGear />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
