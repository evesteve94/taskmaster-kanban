import React, { useContext } from "react";
import { DataContext } from "./context/DataContext";

const ColorPicker = ({ colorName, onChange }) => {
  const { colors } = useContext(DataContext);
  const currentColor = colors[colorName];

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
