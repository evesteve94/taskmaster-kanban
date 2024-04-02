import { useEffect, useState } from "react";
import Header from "./Header";
import ListContainer from "./ListContainer";
import ListPage from "./ListPage";
import Footer from "./Footer";
import InformationPage from "./InformationPage";
import ModalRoute from "./ModalRoute";
import SettingsPage from "./SettingsPage";
import MissingPage from "./MissingPage";
import { Routes, Route } from "react-router-dom";

//context
import { DataProvider } from "./DataContext";

function App() {
  // localStorage.clear();
  const [backgroundImage, setBackgroundImage] = useState(
    localStorage.getItem("backgroundImage") || ""
  );

  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
  }, [backgroundImage]);
  return (
    <div className="App">
      <Header />{" "}
      <DataProvider>
        <Routes>
          <Route path="/" element={<ListContainer />} />

          {/* Route for the modal */}

          <Route path="/tasks/:taskId" element={<ModalRoute />} />
          <Route path="/Lists/:title" element={<ListPage />} />
          <Route path="/info" element={<InformationPage />} />
          <Route
            path="/settings"
            element={<SettingsPage setBackgroundImage={setBackgroundImage} />}
          />
          <Route path="*" element={<MissingPage />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
