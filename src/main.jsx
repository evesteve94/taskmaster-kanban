import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* "/*" = baskomponenten */}
        <Route path="/*" element={<App />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
