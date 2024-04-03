import { Navigate, useParams } from "react-router-dom";
import Modal from "./Modal";
import React, { useContext } from "react";
import { DataContext } from "./context/DataContext";

function ModalRoute({ closeModal }) {
  const { tasks } = useContext(DataContext);
  const { taskId } = useParams(); //är en string
  const task = tasks.find((task) => task.id === parseInt(taskId)); // konventerar till siffra

  if (!task) {
    console.log("no task found");
    // om tasken inte hittas - navigerar till index
    return <Navigate to="/" replace />;
  }

  //annars visas modalen
  return <Modal task={task} closeModal={closeModal} />;
}

export default ModalRoute;
