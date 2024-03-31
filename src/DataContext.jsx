import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [selectedTask, setSelectedTask] = useState(null);
  const [colors, setColors] = useState(() => {
    const storedColors = localStorage.getItem("colors");
    return storedColors
      ? JSON.parse(storedColors)
      : {
          blackColor: "rgba(209, 206, 206, 0.8)",
          whiteColor: "rgb(255, 255, 255)",
          blueColor: "rgb(58, 152, 186)",
        };
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Apply colors to the root element
    document.documentElement.style.setProperty(
      "--black-color",
      colors.blackColor
    );
    document.documentElement.style.setProperty(
      "--white-color",
      colors.whiteColor
    );
    document.documentElement.style.setProperty(
      "--blue-color",
      colors.blueColor
    );

    // Save color changes to local storage
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

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
    <DataContext.Provider
      value={{ tasks, setTasks, openModal, closeModal, colors, setColors }}
    >
      {children}
    </DataContext.Provider>
  );
};
