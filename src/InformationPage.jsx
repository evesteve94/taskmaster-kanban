import React from "react";
import { FaAnglesLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const InformationPage = () => {
  return (
    <main>
      <div className="info-container">
        <div className="page-header">
          {" "}
          <Link to="/" className="back-arrow">
            <FaAnglesLeft />
          </Link>
          <h2 className="page-title">About Task Master</h2>
        </div>
      </div>
    </main>
  );
};

export default InformationPage;
