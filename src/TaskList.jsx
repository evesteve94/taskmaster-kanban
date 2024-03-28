import React from "react";
import Task from "./Task";
import AddTask from "./AddTask";

const TaskList = ({ title, tasks, setTasks, toggleModal, renderAddTask }) => {
  const filteredTasks = tasks.filter((task) => task.category === title);

  return (
    <ul className="task-list">
      <h2 className="list-title">{title}</h2>
      {filteredTasks.map((task, index) => (
        <Task
          key={task.id}
          task={task}
          tasks={tasks}
          setTasks={setTasks}
          toggleModal={toggleModal}
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

// const [taskList, setTaskList] = useState({
//   "taskList-1": {
//     id: "taskList-1",
//     title: "To do",
//     taskIds: [],
//   },
//   "taskList-2": {
//     id: "taskList-2",
//     title: "Doing",
//     taskIds: [],
//   },
//   "taskList-3": {
//     id: "taskList-3",
//     title: "Done",
//     taskIds: [],
//   },
// });

// const addTaskList = () => {
//   const newList = [...taskList];
//   newList.push({
//     id: newList.length + 1, // You can use a more robust ID generation method
//     title: "New Task List",
//     taskids: []
//   });
//   setTaskList(newList);
// };
// Filter tasks based on category matching the title
