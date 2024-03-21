import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListContainer from "./ListContainer";
import Footer from "./Footer";
import Modal from "./Modal";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //hämtar tasken som klickats för redigering i modalen
  const toggleModal = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setSelectedTask(taskToEdit); // Set the selected task
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="App">
      <Header tasks={tasks} setTasks={setTasks} />
      <ListContainer
        tasks={tasks}
        setTasks={setTasks}
        toggleModal={toggleModal}
      />
      {isModalOpen && (
        <Modal
          task={selectedTask}
          tasks={tasks}
          setTasks={setTasks}
          closeModal={closeModal}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
