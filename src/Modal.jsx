import React, { useState } from "react";

const Modal = ({ task, tasks, setTasks, closeModal }) => {
  // Initialize state for edited title and content, handle the case where task is null
  const [editedTitle, setEditedTitle] = useState(task ? task.title : "");
  const [editedContent, setEditedContent] = useState(task ? task.content : "");

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

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <p className="modal-label">{task.category}</p>
          <span className="close-modal" onClick={closeModal}>
            x
          </span>
        </div>
        <div className="modal-content">
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
        </div>
        <div className="modal-footer">
          <button onClick={handleDeleteTask}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
