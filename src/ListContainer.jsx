import React, { useEffect, useState, useContext } from "react";
import TaskList from "./TaskList";
import AddListForm from "./AddListForm";
import { FaSquarePlus, FaSquareXmark } from "react-icons/fa6";
import { DataContext } from "./DataContext";

const ListContainer = () => {
  const { tasks, setTasks } = useContext(DataContext);
  const [taskLists, setTaskLists] = useState(() => {
    const storedLists = localStorage.getItem("lists");
    return storedLists
      ? JSON.parse(storedLists)
      : [
          {
            listId: 1,
            title: "todo",
            color: "rgba(209, 206, 206, 0.658)",
          },
          {
            listId: 2,
            title: "doing",
            color: "rgba(209, 206, 206, 0.658)",
          },
          {
            listId: 3,
            title: "done",
            color: "rgba(209, 206, 206, 0.658)",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(taskLists));
  }, [taskLists]);

  const [showForm, setShowForm] = useState(false);

  const onDeleteList = (listIdToDelete, listCategory) => {
    setTaskLists((prevLists) => {
      // Filter out the list to be deleted
      const updatedLists = prevLists.filter(
        (list) => list.listId !== listIdToDelete
      );

      // Filter the tasks with the same category as the deleted list
      const tasksToUpdate = tasks.filter(
        (task) => task.category === listCategory
      );

      // Update the category of the tasks to "todo"
      const updatedTasks = tasks.map((task) => {
        if (task.category === listCategory) {
          return { ...task, category: "todo" };
        }
        return task;
      });

      // Update the tasks state with the updated tasks
      setTasks(updatedTasks);

      return updatedLists;
    });
  };

  return (
    <main className="list-container">
      {taskLists.map((taskList) => (
        <TaskList
          key={taskList.listId}
          title={taskList.title}
          renderAddTask={taskList.title === "todo"}
          listId={taskList.listId}
          onDeleteList={onDeleteList}
          color={taskList.color}
        />
      ))}
      {showForm && (
        <AddListForm
          taskLists={taskLists}
          setTaskLists={setTaskLists}
          setShowForm={setShowForm}
        />
      )}
      <button
        className="show-form"
        onClick={() => setShowForm(!showForm)}
        style={{
          // color: "white",
          color: showForm ? "red" : "green",
          border: "none",
          cursor: "pointer",
        }}
      >
        {showForm ? (
          <FaSquareXmark className="show-form" />
        ) : (
          <FaSquarePlus className="show-form" />
        )}
      </button>
    </main>
  );
};

export default ListContainer;
