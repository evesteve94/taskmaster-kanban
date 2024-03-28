import React from "react";
import Task from "./Task";
import AddTask from "./AddTask";

const TaskList = ({ title, tasks, setTasks, openModal, renderAddTask }) => {
  const filteredTasks = tasks.filter((task) => task.category === title);

  return (
    <ul className="task-list">
      <div className="taskListHeader">
        <h2 className="list-title">{title}</h2>
        <button className="deleteListButton">x</button>
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
