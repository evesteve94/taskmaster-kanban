import {
  FaAnglesLeft,
  FaSquarePlus,
  FaTrashCan,
  FaGear,
  FaSquareXmark,
  FaImage,
  FaArrowRotateLeft,
  FaArrowsLeftRightToLine,
  FaCircleExclamation,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const InformationPage = () => {
  return (
    <main>
      <div className="info-container">
        <div className="page-header">
          {" "}
          {/* länkar tillbaka till index */}
          <Link to="/" className="back-arrow">
            <FaAnglesLeft className="blue-symbol" />
          </Link>
          <h2 className="page-title">About Task Master</h2>
        </div>
        <h3>The Project</h3>
        <p>
          Task Master is a feature-rich task management application built with
          React. Seamlessly manage your tasks and lists, customize colors, and
          enjoy a seamless single-page application experience. Stay organized
          with Task Master.
        </p>
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
          To create a new task, simply type the Title into the input in the Todo
          List.
        </p>
        <p>
          <FaArrowsLeftRightToLine className="blue-symbol" />
          To move a task betwteen lists, you can drag and drop the card from one
          list to another, it's that easy!
        </p>
        <p>
          <FaGear className="blue-symbol" /> To change the title and content, or
          move location of the task, click the title of the task and make your
          changes in the pop-up window.
        </p>
        <p>
          <FaCircleExclamation className="blue-symbol" /> Got a task that just
          can't wait? Mark it as urgent!
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
        <h3>Themes</h3>

        <p>
          <FaGear className="blue-symbol" /> You can change the color theme of
          the main, detail and text color on the settings page here:{" "}
          <Link to="/settings">
            <FaGear className="blue-symbol" />
          </Link>
        </p>
        <p>
          <FaImage className="blue-symbol" /> The background image can be
          customized! By entering a keyword the Task Master will fetch an image
          from Unsplash!
        </p>
        <p>
          <FaArrowRotateLeft className="blue-symbol" /> To reset the theme or
          background, simply click the buttons in the settings page.
        </p>
      </div>
    </main>
  );
};

export default InformationPage;
