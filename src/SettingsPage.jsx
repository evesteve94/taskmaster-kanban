import { useContext, useState } from "react";
import ColorPicker from "./ColorPicker";
import { DataContext } from "./DataContext";
import Task from "./Task";
import { FaAnglesLeft, FaImages } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SettingsPage = ({ setBackgroundImage }) => {
  const { colors, setColors, tasks } = useContext(DataContext);
  const [keyword, setKeyword] = useState("");

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

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    const accessKey = "eoMgFXTBy9LPZhjnApA_Ec4ulny7fTHdwjUt4cu7XqE";
    const apiUrl = `https://api.unsplash.com/photos/random?query=${keyword}&client_id=${accessKey}`;

    e.preventDefault();
    // Fetch image from Unsplash API based on keyword
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const imageUrl = data.urls.regular;
        setBackgroundImage(imageUrl);
        localStorage.setItem("backgroundImage", imageUrl);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
    setKeyword("");
  };

  const handleResetBackground = () => {
    setBackgroundImage("");
    localStorage.removeItem("backgroundImage");
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
          </button>{" "}
          <form className="background-form" onSubmit={handleSubmit}>
            <h4>Change Background</h4>
            <label htmlFor="keywordInput">Enter a keyword:</label>
            <input
              className="add-input"
              type="text"
              id="keywordInput"
              value={keyword}
              onChange={handleKeywordChange}
              autoComplete="off"
              placeholder="Type a keyword + enter"
            />{" "}
          </form>
          <button
            className="reset-background"
            onClick={handleResetBackground}
            style={{ marginTop: "0.5rem" }}
          >
            Remove Background
          </button>
        </div>
      </div>
    </main>
  );
};

export default SettingsPage;
