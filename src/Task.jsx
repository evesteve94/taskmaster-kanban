import React from "react";

const Task = ({ task, toggleModal }) => {
  const handleTaskClick = () => {
    toggleModal(task.id); // Send the task's ID to toggleModal function
  };

  return (
    <li className="task" onClick={handleTaskClick}>
      <div>
        <h4>{task.title}</h4>
        <p>{task.date}</p>
      </div>
    </li>
  );
};

export default Task;
