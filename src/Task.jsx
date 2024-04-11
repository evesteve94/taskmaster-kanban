import { useContext } from "react";
import { FaTrashCan, FaCircleExclamation } from "react-icons/fa6";
import { DataContext } from "./context/DataContext";

const Task = ({ task }) => {
  const { tasks, setTasks, openModal } = useContext(DataContext);

  const handleTaskClick = () => {
    openModal(task.id);
  };

  const handleDeleteTask = () => {
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(updatedTasks);
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(task));
  };

  //om titeln är längre än 8 bokstäver...
  const displayTitle =
    task.title.length > 8 ? `${task.title.substring(0, 8)}...` : task.title;

  return (
    <li className="task" draggable onDragStart={handleDragStart}>
      <div className="task-header" onClick={handleTaskClick}>
        <h4 className="task-title">
          {" "}
          {task.isUrgent && <FaCircleExclamation className="urgent" />}
          {displayTitle}
        </h4>
        <p className="task-date">{task.date}</p>
      </div>
      <FaTrashCan className="delete-task" onClick={handleDeleteTask} />
    </li>
  );
};

export default Task;
