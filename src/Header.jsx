import React from "react";
import AddTask from "./AddTask";

const Header = ({ tasks, setTasks }) => {
  return (
    <header>
      <AddTask tasks={tasks} setTasks={setTasks} />
    </header>
  );
};

export default Header;
