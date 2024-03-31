import React, { useContext } from "react";
import { DataContext } from "./DataContext";

const ColorPicker = ({ colorName, onChange }) => {
  const { colors } = useContext(DataContext);
  const currentColor = colors[colorName]; // Get the current color based on the colorName

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    onChange(newColor);
  };

  return (
    <input
      className="ColorPicker"
      type="color"
      value={currentColor}
      onChange={handleColorChange}
    />
  );
};

export default ColorPicker;
