import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
import AddListForm from "./AddListForm";

const ListContainer = ({ tasks, setTasks, openModal }) => {
  const [taskLists, setTaskLists] = useState(() => {
    const storedLists = localStorage.getItem("lists");
    return storedLists
      ? JSON.parse(storedLists)
      : [
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
        ];
  });

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(taskLists));
  }, [taskLists]);

  const [newList, setNewList] = useState("");
  const [showForm, setShowForm] = useState(false); // State to track whether to show the form or not

  const handleListSubmit = (e) => {
    e.preventDefault();
    if (!newList) return;
    addList(newList);
    setNewList("");
    setShowForm(false); // Hide the form after submitting
  };

  const addList = (listTitle) => {
    const id = taskLists.length + 1; // Simple way to generate unique IDs
    const newList = {
      listId: id,
      title: listTitle,
    };
    setTaskLists((prevLists) => {
      const updatedLists = [...prevLists, newList];
      localStorage.setItem("lists", JSON.stringify(updatedLists));
      return updatedLists;
    });
  };

  return (
    <div className="list-container">
      {taskLists.map((taskList) => (
        <TaskList
          key={taskList.listId}
          tasks={tasks}
          setTasks={setTasks}
          openModal={openModal}
          title={taskList.title}
          renderAddTask={taskList.title === "todo"}
        />
      ))}
      {showForm && (
        <AddListForm
          newList={newList}
          setNewList={setNewList}
          handleListSubmit={handleListSubmit}
        />
      )}
      <button
        onClick={() => setShowForm(!showForm)}
        style={{
          color: "white",
          backgroundColor: showForm ? "red" : "green",
          border: "none",
          cursor: "pointer",
        }}
      >
        {showForm ? "x" : "+"}
      </button>
    </div>
  );
};

export default ListContainer;
