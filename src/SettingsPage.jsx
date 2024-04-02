import React, { useContext } from "react";
import ColorPicker from "./ColorPicker";
import { DataContext } from "./DataContext";
import Task from "./Task";
import { FaAnglesLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SettingsPage = () => {
  const { colors, setColors, tasks } = useContext(DataContext);

  const handleColorChange = (colorName, newColor) => {
    const updatedColors = { ...colors, [colorName]: newColor };
    setColors(updatedColors);
    localStorage.setItem("colors", JSON.stringify(updatedColors));
  };

  const resetColors = () => {
    const originalColors = {
      blackColor: "rgba(0, 0, 5)",
      whiteColor: "rgb(255, 255, 255)",
      blueColor: "rgb(58, 152, 186)",
    };
    setColors(originalColors);
    localStorage.setItem("colors", JSON.stringify(originalColors));
  };

  const exampleTask = {
    id: 0,
    title: "Example",
    content: "",
    date: "02/04/2024",
    category: "todo",
    isOpen: false,
  };
  return (
    <main>
      <div className="theme-container">
        <div className="page-header">
          {" "}
          <Link to="/" className="back-arrow">
            <FaAnglesLeft className="blue-symbol" />
          </Link>
          <h2 className="page-title">Change Theme</h2>
        </div>
        <div className="color-container">
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
        </div>
        <div className="example-container">
          <p>Example: </p>
          {exampleTask && <Task key={exampleTask.id} task={exampleTask} />}
          <button className="reset-colors" onClick={resetColors}>
            Reset Colors
          </button>
        </div>
      </div>
    </main>
  );
};

export default SettingsPage;
