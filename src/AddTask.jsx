import React, { useState } from "react";

const AddTask = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask) return;
    addTask(newTask);
    setNewTask("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const addTask = (taskTitle) => {
    const currentDate = new Date().toLocaleDateString();
    const id = tasks.length + 1; // Simple way to generate unique IDs
    const task = {
      id,
      title: taskTitle,
      content: "",
      date: currentDate,
      category: "todo",
      isOpen: false,
    };
    // Update tasks state using the callback form of setTasks
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, task];
      // Update localStorage immediately after updating tasks state
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addTask"></label>
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
      />
      <button className="add-button" type="submit" aria-label="Add Task">
        +
      </button>
    </form>
  );
};

export default AddTask;
