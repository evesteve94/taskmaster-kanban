import React from "react";
import TaskList from "./TaskList";
import { useState } from "react";

const ListContainer = ({ tasks, setTasks, openModal }) => {
  const [taskLists, setTaskLists] = useState([
    {
      listId: 1,
      title: "todo",
    },
    {
      listId: 2,
      title: "doing",
    },
    {
      listId: 3,
      title: "done",
    },
  ]);

  return (
    <div className="list-container">
      {taskLists.map((taskList) => (
        <TaskList
          key={taskList.listId} // Provide a unique key for each TaskList
          tasks={tasks}
          setTasks={setTasks}
          openModal={openModal}
          title={taskList.title}
          renderAddTask={taskList.title === "todo"} // Render AddTask for "todo" list only
        />
      ))}
    </div>
  );
};

export default ListContainer;
