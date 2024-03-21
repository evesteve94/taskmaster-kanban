import React from "react";
import Task from "./Task";

const TaskList = ({ title, tasks, setTasks, toggleModal }) => {
  // Filter tasks based on category matching the title
  const filteredTasks = tasks.filter((task) => task.category === title);

  return (
    <ul className="task-list">
      <h2 className="list-title">{title}</h2>
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          tasks={tasks}
          setTasks={setTasks}
          toggleModal={toggleModal}
        />
      ))}
    </ul>
  );
};

export default TaskList;
