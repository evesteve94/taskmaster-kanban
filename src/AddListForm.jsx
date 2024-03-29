import React, { useState } from "react";
import { FaSquarePlus } from "react-icons/fa6";

const AddListForm = ({
  newList,
  setNewList,
  handleListSubmit,
  color,
  setColor,
}) => {
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
