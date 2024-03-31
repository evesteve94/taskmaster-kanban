import Header from "./Header";
import ListContainer from "./ListContainer";
import ListPage from "./ListPage";
import Footer from "./Footer";
import InformationPage from "./InformationPage";
import ModalRoute from "./ModalRoute";
import { Routes, Route } from "react-router-dom";

//context
import { DataProvider } from "./DataContext";

function App() {
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
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
