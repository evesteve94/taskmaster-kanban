import React, { useState, useEffect } from "react";
import { FaTrashCan, FaSquareXmark } from "react-icons/fa6";

const Modal = ({ task, tasks, setTasks, closeModal }) => {
  // Define taskListTitles state to hold the array of task list titles
  const [taskListTitles, setTaskListTitles] = useState([]);

  // Fetch task list titles from localStorage on component mount
  useEffect(() => {
    const storedLists = localStorage.getItem("lists");
    if (storedLists) {
      const lists = JSON.parse(storedLists);
      const titles = lists.map((list) => list.title);
      setTaskListTitles(titles);
    }
  }, []);

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

  const handleMoveTask = (e) => {
    const newCategory = e.target.value;
    const updatedTask = { ...task, category: newCategory }; // Update the category of the task
    const updatedTasks = tasks.map((t) => (t.id === task.id ? updatedTask : t));
    setTasks(updatedTasks);
    closeModal(); // Close modal after moving the task
  };

  return (
    <main>
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <p className="modal-label">{task.category}</p>
            {/* Render select dropdown for moving tasks */}
            <select onChange={handleMoveTask} value="">
              <option value="" disabled>
                Move to
              </option>
              {taskListTitles.map((title) => (
                <option key={title} value={title}>
                  {title}
                </option>
              ))}
            </select>
            <FaSquareXmark className="close-modal" onClick={closeModal} />
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
              placeholder="Type notes..."
            />
          </form>
          <div className="modal-footer">
            <FaTrashCan className="delete-task" onClick={handleDeleteTask} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Modal;
