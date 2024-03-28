import React, { useState, useEffect } from "react";

const Modal = ({ task, tasks, setTasks, closeModal }) => {
  // Initialize state for edited title and content, handle the case where task is null
  const [editedTitle, setEditedTitle] = useState(task ? task.title : "");
  const [editedContent, setEditedContent] = useState(task ? task.content : "");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
    updateTask({ ...task, title: e.target.value });
  };

  const handleContentChange = (e) => {
    setEditedContent(e.target.value);
    updateTask({ ...task, content: e.target.value });
  };

  const updateTask = (updatedTask) => {
    if (!task) return; // Exit early if no task is selected
    const updatedTasks = tasks.map((t) => (t.id === task.id ? updatedTask : t));
    setTasks(updatedTasks);
  };

  const handleDeleteTask = () => {
    if (!task) return; // Exit early if no task is selected
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(updatedTasks);
    closeModal(); // Close modal after deleting task
  };

  const handleMoveTask = (newCategory) => {
    const updatedTasks = [...tasks];
    // Find the index of the task being edited
    const taskIndex = updatedTasks.findIndex((t) => t.id === task.id);
    // Update the category of the task
    updatedTasks[taskIndex].category = newCategory;
    // Update the tasks state with the modified task
    setTasks(updatedTasks);
    // Close the modal after moving the task
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <p className="modal-label">{task.category}</p>
          {/* Conditionally render buttons based on task category */}
          {task.category === "todo" ? (
            <>
              <button onClick={() => handleMoveTask("doing")}>
                Move to Doing
              </button>
              <button onClick={() => handleMoveTask("done")}>
                Move to Done
              </button>
            </>
          ) : task.category === "doing" ? (
            <>
              <button onClick={() => handleMoveTask("todo")}>
                Move to Todo
              </button>
              <button onClick={() => handleMoveTask("done")}>
                Move to Done
              </button>
            </>
          ) : (
            <>
              <button onClick={() => handleMoveTask("todo")}>
                Move to Todo
              </button>
              <button onClick={() => handleMoveTask("doing")}>
                Move to Doing
              </button>
            </>
          )}
          <span className="close-modal" onClick={closeModal}>
            x
          </span>
        </div>
        <form className="modal-content">
          {" "}
          <input
            className="modal-title"
            type="text"
            value={editedTitle}
            onChange={handleTitleChange}
          />
          <p className="modal-date">{task ? task.date : ""}</p>
          <textarea
            className="modal-text"
            value={editedContent}
            onChange={handleContentChange}
          />
        </form>
        <div className="modal-footer">
          <button onClick={handleDeleteTask}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
