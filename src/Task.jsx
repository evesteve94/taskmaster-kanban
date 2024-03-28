import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Task = ({ task, toggleModal }) => {
  const handleTaskClick = () => {
    toggleModal(task.id); // Send the task's ID to toggleModal function
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
