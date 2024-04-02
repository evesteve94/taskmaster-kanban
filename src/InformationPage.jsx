import {
  FaAnglesLeft,
  FaSquarePlus,
  FaTrashCan,
  FaGear,
  FaSquareXmark,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const InformationPage = () => {
  return (
    <main>
      <div className="info-container">
        <div className="page-header">
          {" "}
          <Link to="/" className="back-arrow">
            <FaAnglesLeft className="blue-symbol" />
          </Link>
          <h2 className="page-title">About Task Master</h2>
        </div>
        <h3>The Project</h3>
        <p>
          Task Master was developed as an assigment for my course in React at
          Chas Academy. The goal was to implement as many React features as
          possible to make a seemless SPA-application. Following the React
          philosophy, I've divided up the application is many re-usable
          components, added hooks such as useContext, useState and useEffect to
          seemlessly update Tasks, Lists and color preferences, and store them
          in the browsers localStorge for better UI/UX.
        </p>
        <p>
          Using various react packages including browser router, the SPA is
          developed with browser history and navigation in mind. Each task, list
          and page has its own unique URL-endpoint.
        </p>
        <h3>Tasks</h3>
        <p>
          <FaSquarePlus className="blue-symbol" />
          To create a new task, simply type the Title into the input in the TODO
          List.
        </p>
        <p>
          <FaGear className="blue-symbol" /> To change the title and content, or
          move location of the task, click the title of the task and make your
          changes in the pop-up window.
        </p>
        <p>
          <FaTrashCan className="blue-symbol" /> To delete a task click the
          delete button
        </p>
        <h3>Lists</h3>
        <p>
          <FaSquarePlus className="blue-symbol" /> To add a new list, press the
          + button
        </p>
        <p>
          {" "}
          <FaGear className="blue-symbol" />
          To view all tasks in a list or to change the color of a list, click
          the lists title.
        </p>
        <p>
          <FaSquareXmark className="blue-symbol" /> To delete a list, click the
          X in the top right corner.
        </p>
      </div>
    </main>
  );
};

export default InformationPage;
