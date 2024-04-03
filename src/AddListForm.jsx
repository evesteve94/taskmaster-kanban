import React, { useState } from "react";
import { FaSquarePlus } from "react-icons/fa6";

const AddListForm = ({ taskLists, setTaskLists, setShowForm }) => {
  const [newList, setNewList] = useState("");
  const [color, setColor] = useState("#d3d3d3");

  const handleListSubmit = (e) => {
    e.preventDefault();
    if (!newList) return;
    addList(newList, color); // Pass the selected color to addList
    setNewList("");
    setShowForm(false);
  };

  const addList = (listTitle, listColor) => {
    const id = taskLists.length + 1;
    const newList = {
      listId: id,
      title: listTitle,
      color: listColor, // Set the color of the new list
    };
    setTaskLists((prevLists) => {
      const updatedLists = [...prevLists, newList];
      localStorage.setItem("lists", JSON.stringify(updatedLists));
      return updatedLists;
    });
  };
  const handleColorChange = (e) => {
    const newValue = e.target.value.toUpperCase();
    const rgbaColor = `${newValue}${parseInt(0.658 * 255, 10)
      .toString(16)
      .padStart(2, "0")}`; // Convert opacity to hexadecimal and append to color
    setColor(newValue === "" ? "#d3d3d3" : rgbaColor);
  };

  return (
    <form
      className="addListForm"
      onSubmit={handleListSubmit}
      style={{ backgroundColor: color }}
    >
      <h4>Add List</h4>
      <label htmlFor="listTitle">Title</label>
      <span className="color-placeholder">Select title</span>
      <input
        className="list-input"
        type="text"
        required
        id="listTitle"
        placeholder="Title"
        value={newList}
        onChange={(e) => setNewList(e.target.value)}
        autoComplete="off"
      />
      <label htmlFor="listColor">Color</label>
      <span className="color-placeholder">Select color</span>
      <input
        className="list-color"
        required
        type="color"
        id="listColor"
        value={color}
        onChange={handleColorChange}
      />

      <FaSquarePlus
        className="add-list-button"
        type="submit"
        aria-label="Add List"
        onClick={handleListSubmit}
        style={{ marginTop: "0.25rem" }}
      />
    </form>
  );
};

export default AddListForm;
