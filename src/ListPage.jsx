import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Task from "./Task"; // Import the Task component
import { FaAnglesLeft, FaSquarePlus } from "react-icons/fa6";
import { DataContext } from "./DataContext";

const ListPage = () => {
  const { tasks, openModal } = useContext(DataContext);
  // Get the list title from URL parameters
  const { title } = useParams();

  // Initialize state for color
  const [listColor, setListColor] = useState(() => {
    const storedLists = localStorage.getItem("lists");
    const parsedLists = storedLists ? JSON.parse(storedLists) : [];
    const list = parsedLists.find((list) => list.title === title);
    return list ? list.color : "#FFFFFF"; // Default color if not found
  });

  // Update local storage when color changes
  useEffect(() => {
    const storedLists = localStorage.getItem("lists");
    const parsedLists = storedLists ? JSON.parse(storedLists) : [];
    const updatedLists = parsedLists.map((list) =>
      list.title === title ? { ...list, color: listColor } : list
    );
    localStorage.setItem("lists", JSON.stringify(updatedLists));
  }, [listColor, title]);

  // Handle color change
  const handleListColorChange = (e) => {
    setListColor(e.target.value);
  };

  // Filter tasks based on the category (title) matching the list title
  const filteredTasks = tasks.filter((task) => task.category === title);

  return (
    <main>
      <ul className="task-list-page" style={{ backgroundColor: listColor }}>
        <div className="page-header">
          {" "}
          <Link to="/" className="back-arrow">
            <FaAnglesLeft />
          </Link>
          <h2 className="page-title">Tasks in {title}</h2>
          <form>
            <label className="change-color" htmlFor="listColor">
              Change color
            </label>
            <p style={{ fontSize: "0.8rem" }}>Change color</p>
            <input
              type="color"
              id="listColor"
              value={listColor}
              onChange={handleListColorChange}
            />
          </form>
        </div>

        <div className="list-tasks">
          {/* Map over the filtered tasks and render Task component for each */}
          {filteredTasks.map((task) => (
            <Task key={task.id} task={task} openModal={openModal} />
          ))}
        </div>
      </ul>
    </main>
  );
};

export default ListPage;
