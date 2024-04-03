import React, { useState, useContext } from "react";
import { FaSquarePlus } from "react-icons/fa6";
import { DataContext } from "./context/DataContext";

const AddTask = () => {
  const { tasks, setTasks } = useContext(DataContext);
  //state för newTask
  const [newTask, setNewTask] = useState("");

  //anropar addTask, nollställer newTask
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask) return;
    addTask(newTask);
    setNewTask("");
  };

  //hanterar 'enter' för användarvänlighet
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  //skapar ny instans av task med nycklar och värden
  const addTask = (taskTitle) => {
    const currentDate = new Date().toLocaleDateString();
    const id = tasks.length + 1; // generar id
    const task = {
      id,
      title: taskTitle,
      content: "",
      date: currentDate,
      category: "todo",
      isUrgent: false,
    };
    // uppdaterar array och localStorage
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, task];
      // Update localStorage immediately after updating tasks state
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addTask">Add Task</label>
      <input
        className="add-input"
        type="text"
        autoFocus
        id="addTask"
        placeholder="Add Task"
        required
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleKeyPress}
        autoComplete="off"
      />

      <FaSquarePlus
        className="add-button"
        type="submit"
        aria-label="Add Task"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default AddTask;
