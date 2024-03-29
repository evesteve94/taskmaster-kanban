import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
import AddListForm from "./AddListForm";
import { FaSquarePlus, FaSquareXmark } from "react-icons/fa6";

const ListContainer = ({ tasks, setTasks, openModal }) => {
  const [taskLists, setTaskLists] = useState(() => {
    const storedLists = localStorage.getItem("lists");
    return storedLists
      ? JSON.parse(storedLists)
      : [
          {
            listId: 1,
            title: "todo",
            color: "rgb(255, 156, 84, 0.9)",
          },
          {
            listId: 2,
            title: "doing",
            color: "rgb(255, 171, 134, 0.9)",
          },
          {
            listId: 3,
            title: "done",
            color: "rgb(255, 192, 184, 0.9)",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(taskLists));
  }, [taskLists]);

  const [newList, setNewList] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [color, setColor] = useState("#000000"); // Initialize with black color

  const handleListSubmit = (e) => {
    e.preventDefault();
    if (!newList) return;
    addList(newList, color); // Pass the selected color to addList
    setNewList("");
    setShowForm(false);
  };

  const addList = (listTitle, listColor) => {
    const id = taskLists.length + 1;
    const newList = {
      listId: id,
      title: listTitle,
      color: listColor, // Set the color of the new list
    };
    setTaskLists((prevLists) => {
      const updatedLists = [...prevLists, newList];
      localStorage.setItem("lists", JSON.stringify(updatedLists));
      return updatedLists;
    });
  };

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
          tasks={tasks}
          setTasks={setTasks}
          openModal={openModal}
          title={taskList.title}
          renderAddTask={taskList.title === "todo"}
          listId={taskList.listId}
          onDeleteList={onDeleteList}
          color={taskList.color}
        />
      ))}
      {showForm && (
        <AddListForm
          newList={newList}
          setNewList={setNewList}
          handleListSubmit={handleListSubmit}
          color={color}
          setColor={setColor}
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
