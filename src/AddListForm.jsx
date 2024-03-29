import React from "react";
import { FaSquarePlus } from "react-icons/fa6";

const AddListForm = ({ newList, setNewList, handleListSubmit }) => {
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
      />
      <FaSquarePlus
        className="add-list-button"
        type="submit"
        aria-label="Add List"
      />
    </form>
  );
};

export default AddListForm;
