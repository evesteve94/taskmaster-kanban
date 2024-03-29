import React from "react";
import Task from "./Task";
import AddTask from "./AddTask";
import { FaSquareXmark } from "react-icons/fa6";

const TaskList = ({
  title,
  tasks,
  setTasks,
  openModal,
  renderAddTask,
  listId,
  onDeleteList,
}) => {
  const filteredTasks = tasks.filter((task) => task.category === title);

  const handleDeleteList = () => {
    onDeleteList(listId); // Call the onDeleteList function with the listId as an argument
  };

  return (
    <ul className="task-list">
      <div className="taskListHeader">
        <h2 className="list-title">{title}</h2>
        <FaSquareXmark
          className="deleteListButton"
          onClick={handleDeleteList}
        />
      </div>

      {filteredTasks.map((task, index) => (
        <Task
          key={task.id}
          task={task}
          tasks={tasks}
          setTasks={setTasks}
          openModal={openModal}
          index={index}
        />
      ))}
      {/* Render AddTask component if renderAddTask is true and title is "todo" */}
      {renderAddTask && title === "todo" && (
        <AddTask tasks={tasks} setTasks={setTasks} />
      )}
    </ul>
  );
};

export default TaskList;
