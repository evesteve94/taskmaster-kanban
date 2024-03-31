import { Navigate, useParams } from "react-router-dom";
import Modal from "./Modal";
import React, { useContext } from "react";
import { DataContext } from "./DataContext";

function ModalRoute({ closeModal }) {
  const { tasks } = useContext(DataContext);
  const { taskId } = useParams();
  const task = tasks.find((task) => task.id === parseInt(taskId)); // Convert taskId to number

  if (!task) {
    console.log("no task found");
    // If task is not found, navigate back to the list container route
    return <Navigate to="/" replace />;
  }

  return <Modal task={task} closeModal={closeModal} />;
}

export default ModalRoute;
