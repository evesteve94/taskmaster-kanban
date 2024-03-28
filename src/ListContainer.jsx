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
        renderAddTask={true} // Pass a prop to render AddTask inside TaskList
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

// import React from "react";
// import TaskList from "./TaskList";

// const ListContainer = ({ tasks, setTasks, toggleModal, taskList }) => {
//   return (
//     <div className="list-container">
//       {Object.values(taskList).map((list) => (
//         <TaskList
//           key={list.id}
//           title={list.title}
//           tasks={tasks}
//           setTasks={setTasks}
//           toggleModal={toggleModal}
//           taskList={list}
//         />
//       ))}
//     </div>
//   );
// };

// export default ListContainer;
