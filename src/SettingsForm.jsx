import { useContext, useState } from "react";
import ColorPicker from "./ColorPicker";
import Task from "./Task";
import { DataContext } from "./context/DataContext";

const SettingsForm = () => {
  const { colors, setColors, setBackgroundImage } = useContext(DataContext);

  //state för sökord till Unsplash
  const [keyword, setKeyword] = useState("");

  //hanterar ändring av root-färgerna (se DataContext)
  const handleColorChange = (colorName, newColor) => {
    const updatedColors = { ...colors, [colorName]: newColor };
    setColors(updatedColors);
    localStorage.setItem("colors", JSON.stringify(updatedColors));
  };

  //återställer till default-färger
  const resetColors = () => {
    const originalColors = {
      blackColor: "000005",
      whiteColor: "#ffffff",
      blueColor: "#3a98ba",
    };
    setColors(originalColors);
    localStorage.setItem("colors", JSON.stringify(originalColors));
  };

  //visnings exempel för valda färger
  const exampleTask = {
    id: 0,
    title: "Example",
    content: "",
    date: "02/04/2024",
    category: "todo",
    isOpen: false,
  };

  //ändring av sökord
  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  //hämtar bild baserat på sökord
  const handleSubmit = (e) => {
    const accessKey = "eoMgFXTBy9LPZhjnApA_Ec4ulny7fTHdwjUt4cu7XqE";
    //använder key och sökord
    const apiUrl = `https://api.unsplash.com/photos/random?query=${keyword}&client_id=${accessKey}`;

    e.preventDefault();
    // Fetchar bild från Unsplash
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        //skapar länk till bilden i 'regular' format
        const imageUrl = data.urls.regular;
        //använder statet i DataContext- sparar i localStorage
        setBackgroundImage(imageUrl);
        localStorage.setItem("backgroundImage", imageUrl);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
    setKeyword(""); //nollställer
  };

  //raderar bakgrundsbilden
  const handleResetBackground = () => {
    setBackgroundImage("");
    localStorage.removeItem("backgroundImage");
  };
  return (
    <>
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
    </>
  );
};

export default SettingsForm;
