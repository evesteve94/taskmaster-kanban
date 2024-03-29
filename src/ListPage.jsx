import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Task from "./Task"; // Import the Task component
import { FaAnglesLeft } from "react-icons/fa6";

const ListPage = ({ tasks, openModal }) => {
  // Get the list title from URL parameters
  const { title } = useParams();

  // Filter tasks based on the category (title) matching the list title
  const filteredTasks = tasks.filter((task) => task.category === title);

  return (
    <main>
      <ul className="task-list-page">
        <div className="page-header">
          {" "}
          <Link to="/" className="back-arrow">
            <FaAnglesLeft />
          </Link>
          <h2 className="page-title">Tasks in {title}</h2>
        </div>

        <div className="list-tasks">
          {/* Map over the filtered tasks and render Task component for each */}
          {filteredTasks.map((task, index) => (
            <Task
              key={task.id}
              task={task}
              index={index} // Pass the index prop if needed
              openModal={openModal}
            />
          ))}
        </div>
      </ul>
    </main>
  );
};

export default ListPage;
