import React from "react";
import { Link } from "react-router-dom";
import { FaGear, FaCircleInfo } from "react-icons/fa6";

const Header = () => {
  //länkar till info och inställningar
  return (
    <header>
      <Link to="/" className="header-link">
        <h1>
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/6151/c3284fd3-44bf-404f-bd38-344c5b34da6c.svg"
            alt="Task Master SVG Logo"
            className="logo"
          />
          Task Master{" "}
        </h1>
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
