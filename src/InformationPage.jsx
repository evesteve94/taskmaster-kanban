import React, { useContext } from "react";
import { FaAnglesLeft } from "react-icons/fa6";
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
            <FaAnglesLeft />
          </Link>
          <h2 className="page-title">About Task Master</h2>
        </div>
        <h3>The Project</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quos id
          dolore laudantium, laborum nisi voluptatum aut, veniam labore dicta
          dolorem a rem animi possimus laboriosam molestiae debitis! Aliquid,
          harum.
        </p>
        <h3>Tasks</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quos id
          dolore laudantium, laborum nisi voluptatum aut, veniam labore dicta
          dolorem a rem animi possimus laboriosam molestiae debitis! Aliquid,
          harum.
        </p>
        <h3>Lists</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quos id
          dolore laudantium, laborum nisi voluptatum aut, veniam labore dicta
          dolorem a rem animi possimus laboriosam molestiae debitis! Aliquid,
          harum.
        </p>
      </div>
      <div className="theme-container">
        <h3>Change Theme</h3>
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
