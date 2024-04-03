import React, { useEffect, useState, useContext } from "react";
import TaskList from "./TaskList";
import AddListForm from "./AddListForm";
import { FaSquarePlus, FaSquareXmark } from "react-icons/fa6";
import { DataContext } from "./context/DataContext";

const ListContainer = () => {
  const { tasks, setTasks } = useContext(DataContext);
  //hook för listor - skapar tre st som default
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

  //hanterar/sparar alla förändingar av listor
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(taskLists));
  }, [taskLists]);

  //hook för att toggle AddListForm
  const [showForm, setShowForm] = useState(false);

  //raderar listan och flyttar dens tasks till todo
  const onDeleteList = (listIdToDelete, listCategory) => {
    setTaskLists((prevLists) => {
      // Filtrear ut listan som ska raderas
      const updatedLists = prevLists.filter(
        (list) => list.listId !== listIdToDelete
      );

      // hittar tillhörande tasks
      const tasksToUpdate = tasks.filter(
        (task) => task.category === listCategory
      );

      // placerar i todo
      const updatedTasks = tasks.map((task) => {
        if (task.category === listCategory) {
          return { ...task, category: "todo" };
        }
        return task;
      });

      // uppdaterar tasks
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
          listId={taskList.listId}
          onDeleteList={onDeleteList}
          color={taskList.color}
        />
      ))}
      {/* visar AddListForm efter toggle */}
      {showForm && (
        <AddListForm
          taskLists={taskLists}
          setTaskLists={setTaskLists}
          setShowForm={setShowForm}
        />
      )}
      {/* togglar AddListForm */}
      <button
        className="show-form"
        onClick={() => setShowForm(!showForm)}
        style={{
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
