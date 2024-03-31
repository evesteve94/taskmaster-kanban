import React from "react";
import { Link } from "react-router-dom";
import { FaGear } from "react-icons/fa6";

const Header = () => {
  return (
    <header>
      <Link to="/" className="header-link">
        <h1>Task Master</h1>
      </Link>
      <Link to="/info" className="info-link">
        {" "}
        <FaGear />
      </Link>
    </header>
  );
};

export default Header;
