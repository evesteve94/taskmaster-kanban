import React, { useState, useEffect } from "react";

const Modal = ({ task, tasks, setTasks, closeModal }) => {
  // Initialize state for edited title and content
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");

  // Initialize editedTitle and editedContent once when task changes
  useEffect(() => {
    if (task) {
      setEditedTitle(task.title);
      setEditedContent(task.content);
    }
  }, [task]);

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

  if (!task) {
    return null; // If task is null, don't render anything
  }

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setEditedTitle(newTitle);
    updateTask({ ...task, title: newTitle });
  };

  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setEditedContent(newContent);
    updateTask({ ...task, content: newContent });
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((t) => (t.id === task.id ? updatedTask : t));
    setTasks(updatedTasks);
  };

  const handleDeleteTask = () => {
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(updatedTasks);
    closeModal(); // Close modal after deleting task
  };

  const handleMoveTask = (newCategory) => {
    const updatedTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return { ...t, category: newCategory };
      }
      return t;
    });
    setTasks(updatedTasks);
    closeModal(); // Close modal after moving the task
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
          <p className="modal-date">{task.date}</p>
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
