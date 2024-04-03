import SettingsForm from "./SettingsForm";
import { FaAnglesLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SettingsPage = () => {
  return (
    <main>
      <div className="theme-container">
        <div className="page-header">
          {" "}
          <Link to="/" className="back-arrow">
            <FaAnglesLeft className="blue-symbol" />
          </Link>
          <h2 className="page-title">Change Theme</h2>
        </div>
        <SettingsForm />
      </div>
    </main>
  );
};

export default SettingsPage;
