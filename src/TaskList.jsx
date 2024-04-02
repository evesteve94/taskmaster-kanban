import { useContext } from "react";
import Task from "./Task";
import AddTask from "./AddTask";
import { FaSquareXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { DataContext } from "./DataContext";

const TaskList = ({ title, listId, onDeleteList, color }) => {
  const { tasks, setTasks } = useContext(DataContext);

  const filteredTasks = tasks.filter((task) => task.category === title);

  const handleDeleteList = () => {
    onDeleteList(listId, title); // Call the onDeleteList function with the listId as an argument
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedTask = JSON.parse(e.dataTransfer.getData("text/plain"));

    // Update the category of the dropped task
    const updatedTasks = tasks.map((task) => {
      if (task.id === droppedTask.id) {
        return { ...task, category: title };
      }
      return task;
    });

    // Set the updated tasks state
    setTasks(updatedTasks);
  };

  return (
    <ul
      className="task-list"
      style={{ backgroundColor: color }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="taskListHeader">
        <Link to={`/Lists/${title}`} className="list-link">
          <h2 className="list-title">{title}</h2>
        </Link>
        <FaSquareXmark
          className="deleteListButton"
          onClick={handleDeleteList}
        />
      </div>

      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
      {/* Render AddTask component if title is "todo" */}
      {title === "todo" && <AddTask tasks={tasks} setTasks={setTasks} />}
    </ul>
  );
};

export default TaskList;
