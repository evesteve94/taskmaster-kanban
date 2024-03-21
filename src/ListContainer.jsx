import React from "react";
import TaskList from "./TaskList";

const ListContainer = ({ tasks, setTasks, toggleModal }) => {
  return (
    <div className="list-container">
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        toggleModal={toggleModal}
        title="todo"
      />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        toggleModal={toggleModal}
        title="doing"
      />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        toggleModal={toggleModal}
        title="done"
      />
    </div>
  );
};

export default ListContainer;
