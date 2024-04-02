import React from "react";
import { FaAnglesLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MissingPage = () => {
  return (
    <main>
      {" "}
      <div className="info-container">
        <div className="page-header">
          {" "}
          <Link to="/" className="back-arrow">
            <FaAnglesLeft className="blue-symbol" />
          </Link>
          <h2 className="page-title">Oops...</h2>
        </div>
        <Link to="/" className="back-arrow">
          Back To Home
        </Link>
      </div>
    </main>
  );
};

export default MissingPage;
