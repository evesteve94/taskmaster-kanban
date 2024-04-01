import React, { useContext } from "react";
import {
  FaAnglesLeft,
  FaSquarePlus,
  FaTrashCan,
  FaGear,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import ColorPicker from "./ColorPicker";
import { DataContext } from "./DataContext";
import Task from "./Task";

const InformationPage = () => {
  const { colors, setColors, tasks } = useContext(DataContext);

  const handleColorChange = (colorName, newColor) => {
    const updatedColors = { ...colors, [colorName]: newColor };
    setColors(updatedColors);
    localStorage.setItem("colors", JSON.stringify(updatedColors));
  };

  const resetColors = () => {
    const originalColors = {
      blackColor: "rgba(0, 0, 0)",
      whiteColor: "rgb(255, 255, 255)",
      blueColor: "rgb(58, 152, 186)",
    };
    setColors(originalColors);
    localStorage.setItem("colors", JSON.stringify(originalColors));
  };

  // Render only the first task in the tasks array
  const firstTask = tasks.length > 0 ? tasks[0] : null;

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
          <FaGear className="blue-symbol" /> To change the title, content och
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
      </div>
      <div className="theme-container">
        <h3 className="page-title">Change Theme</h3>
        <div className="color-div">
          <label>Main Color:</label>
          <p
            style={{
              backgroundColor: colors.blueColor,
              padding: "0.5rem",
              borderRadius: "0.25rem",
            }}
          >
            Main color
          </p>
          <ColorPicker
            colorName="blueColor"
            defaultColor={colors.blueColor}
            onChange={(newColor) => handleColorChange("blueColor", newColor)}
          />
        </div>
        <div className="color-div">
          <label>Detail Color:</label>
          <p
            style={{
              backgroundColor: colors.whiteColor,
              padding: "0.5rem",
              borderRadius: "0.25rem",
            }}
          >
            Detail color
          </p>
          <ColorPicker
            colorName="whiteColor"
            defaultColor={colors.whiteColor}
            onChange={(newColor) => handleColorChange("whiteColor", newColor)}
          />
        </div>
        <div className="color-div">
          <label>Text Color:</label>
          <p
            style={{
              padding: "0.5rem",
              backgroundColor: "white",
              borderRadius: "0.25rem",
              fontWeight: "900",
            }}
          >
            Text color
          </p>
          <ColorPicker
            colorName="blackColor"
            defaultColor={colors.blackColor}
            onChange={(newColor) => handleColorChange("blackColor", newColor)}
          />
        </div>
        <p>Exampel: </p>
        {firstTask && <Task key={firstTask.id} task={firstTask} />}
        <button className="reset-colors" onClick={resetColors}>
          Reset Colors
        </button>
      </div>
    </main>
  );
};

export default InformationPage;
