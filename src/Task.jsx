import { useContext } from "react";
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

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(task));
  };

  return (
    <li className="task" draggable onDragStart={handleDragStart}>
      <div className="task-header" onClick={handleTaskClick}>
        <h4 className="task-title">{task.title}</h4>
        <p className="task-date">{task.date}</p>
      </div>
      <FaTrashCan className="delete-task" onClick={handleDeleteTask} />
    </li>
  );
};

export default Task;
