import React from "react";

const Task = ({ task, openModal }) => {
  const handleTaskClick = () => {
    openModal(task.id); // Send the task's ID to openModal function
    console.log(task.id);
  };
  return (
    <li className="task" onClick={handleTaskClick}>
      <div>
        <h4 className="task-title">{task.title}</h4>
        <p className="task-date">{task.date}</p>
      </div>
    </li>
  );
};

export default Task;
