import React, { useContext } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { DataContext } from "./DataContext";

const Task = ({ task }) => {
  const { tasks, setTasks, openModal } = useContext(DataContext);

  const handleTaskClick = () => {
    openModal(task.id); // Send the task's ID to openModal function
    console.log(task.id);
  };

  const handleDeleteTask = () => {
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(updatedTasks);
  };

  return (
    <li className="task">
      <div className="task-header" onClick={handleTaskClick}>
        <h4 className="task-title">{task.title}</h4>
        <FaTrashCan className="delete-task" onClick={handleDeleteTask} />
      </div>
      <p className="task-date">{task.date}</p>
    </li>
  );
};

export default Task;
