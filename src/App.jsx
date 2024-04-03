import { useEffect, useState } from "react";
//Layout
import Header from "./Header";
import Footer from "./Footer";

//Pages
import ListPage from "./ListPage";
import InformationPage from "./InformationPage";
import ModalRoute from "./ModalRoute";
import SettingsPage from "./SettingsPage";
import MissingPage from "./MissingPage";

//index -main
import ListContainer from "./ListContainer";

//Routes
import { Routes, Route } from "react-router-dom";

//context
import { DataProvider } from "./context/DataContext";

function App() {
  // localStorage.clear();
  return (
    <div className="App">
      <Header />{" "}
      <DataProvider>
        <Routes>
          <Route path="/" element={<ListContainer />} />

          {/* ModalRoute undersöker om en task är klickad - returnerar Modal + task.id som endpoint} */}

          <Route path="/tasks/:taskId" element={<ModalRoute />} />
          <Route path="/Lists/:title" element={<ListPage />} />
          <Route path="/info" element={<InformationPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<MissingPage />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
