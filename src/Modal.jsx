import React, { useState, useEffect, useContext } from "react";
import {
  FaTrashCan,
  FaSquareXmark,
  FaCircleExclamation,
} from "react-icons/fa6";
import { DataContext } from "./context/DataContext";

const Modal = ({ task }) => {
  const { tasks, setTasks, closeModal } = useContext(DataContext);

  //states
  const [taskListTitles, setTaskListTitles] = useState([]);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");

  //hämtar alla titlar + uppdaterar innehåll dynamiskt utan en spara-knapp
  useEffect(() => {
    const storedLists = localStorage.getItem("lists");
    if (storedLists) {
      const lists = JSON.parse(storedLists);
      const titles = lists.map((list) => list.title);
      setTaskListTitles(titles);
    }
    if (task) {
      setEditedTitle(task.title);
      setEditedContent(task.content);
    }
  }, [task]);

  //stäger modalen vid 'enter'
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

  //ändring av titel
  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setEditedTitle(newTitle);
    updateTask({ ...task, title: newTitle });
  };

  //ändring av innehåll
  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setEditedContent(newContent);
    updateTask({ ...task, content: newContent });
  };

  //uppdaterar task baserat på id
  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((t) => (t.id === task.id ? updatedTask : t));
    setTasks(updatedTasks);
  };

  //raderar task baserat på id
  const handleDeleteTask = () => {
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(updatedTasks);
    closeModal();
  };

  //flyttar task baserat på titel
  const handleMoveTask = (e) => {
    const newCategory = e.target.value;
    const updatedTask = { ...task, category: newCategory };
    const updatedTasks = tasks.map((t) => (t.id === task.id ? updatedTask : t));
    setTasks(updatedTasks);
    closeModal();
  };

  //växlar isurgent
  const handleToggleUrgent = () => {
    const updatedTask = { ...task, isUrgent: !task.isUrgent };
    updateTask(updatedTask);
  };

  return (
    <main>
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <p className="modal-label">{task.category}</p>
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
          <FaCircleExclamation
            className={task.isUrgent ? "urgent" : "notUrgent"}
            onClick={handleToggleUrgent}
          />
          <form className="modal-content">
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
