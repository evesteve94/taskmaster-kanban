import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListContainer from "./ListContainer";
import ListPage from "./ListPage";
import Footer from "./Footer";
import InformationPage from "./InformationPage";
import ModalRoute from "./ModalRoute";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useParams,
} from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const navigate = useNavigate();
  const [selectedTask, setSelectedTask] = useState(null);

  const openModal = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setSelectedTask(taskToEdit); // Set the selected task
    navigate(`/tasks/${taskId}`); // Navigate to modal route
  };

  const closeModal = () => {
    setSelectedTask(null); // Reset selected task
    navigate("/"); // Navigate back to the list container route
  };

  return (
    <div className="App">
      <Header tasks={tasks} setTasks={setTasks} />{" "}
      <Routes>
        <Route
          path="/"
          element={
            <ListContainer
              tasks={tasks}
              setTasks={setTasks}
              openModal={openModal} // Pass openModal function to list container
            />
          }
        />

        {/* Route for the modal */}

        <Route
          path="/tasks/:taskId"
          element={
            <ModalRoute
              tasks={tasks}
              setTasks={setTasks}
              closeModal={closeModal}
            />
          }
        />
        <Route
          path="/Lists/:title"
          element={<ListPage tasks={tasks} openModal={openModal} />}
        />
        <Route path="/info" element={<InformationPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
