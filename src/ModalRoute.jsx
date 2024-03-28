import { Navigate, useParams } from "react-router-dom";
import Modal from "./Modal";

function ModalRoute({ tasks, setTasks, closeModal }) {
  const { taskId } = useParams();
  const task = tasks.find((task) => task.id === parseInt(taskId)); // Convert taskId to number

  if (!task) {
    console.log("no task found");
    // If task is not found, navigate back to the list container route
    return <Navigate to="/" replace />;
  }

  return (
    <Modal
      task={task}
      tasks={tasks}
      setTasks={setTasks}
      closeModal={closeModal}
    />
  );
}

export default ModalRoute;
