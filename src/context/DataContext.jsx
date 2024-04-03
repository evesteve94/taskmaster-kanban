import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  //tasks används i nästan varenda komponent
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [selectedTask, setSelectedTask] = useState(null);

  //används för settings & colorPicker
  const [colors, setColors] = useState(() => {
    const storedColors = localStorage.getItem("colors");
    return storedColors
      ? JSON.parse(storedColors)
      : {
          blackColor: "rgba(0, 0, 0)",
          whiteColor: "rgb(255, 255, 255)",
          blueColor: "rgb(58, 152, 186)",
        };
  });

  //Navigera mellan sidor
  const navigate = useNavigate();

  useEffect(() => {
    // Tillämpar mina root-colors efter användarens preferenser
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

    // sparar i localStorge
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

  //use effect för tasks & colors
  //ser till att alla ändringar som spraras i localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

  //modalens functioner används i Modal & List Page
  const openModal = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setSelectedTask(taskToEdit); // Set the selected task
    navigate(`/tasks/${taskId}`); // Navigate to modal route
  };

  const closeModal = () => {
    setSelectedTask(null); // Reset selected task
    navigate("/"); // Navigate back to the list container route
  };
  //hanterar tillämpning och sparning av backgrundbild
  const [backgroundImage, setBackgroundImage] = useState(
    localStorage.getItem("backgroundImage") || ""
  );

  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
  }, [backgroundImage]);

  return (
    <DataContext.Provider
      value={{
        tasks,
        setTasks,
        openModal,
        closeModal,
        colors,
        setColors,
        setBackgroundImage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
