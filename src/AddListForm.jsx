import React, { useState } from "react";
import { FaSquarePlus } from "react-icons/fa6";

const AddListForm = ({ taskLists, setTaskLists, setShowForm }) => {
  const [newList, setNewList] = useState("");
  const [color, setColor] = useState("#000000"); // Initialize with black color

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
    setColor(newValue === "" ? "#000000" : newValue);
  };

  return (
    <form className="addListForm" onSubmit={handleListSubmit}>
      <label htmlFor="listTitle">Title</label>
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
      />
    </form>
  );
};

export default AddListForm;
