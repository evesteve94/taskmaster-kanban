import React from "react";

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
      <button type="submit" aria-label="Add List">
        Add List
      </button>
    </form>
  );
};

export default AddListForm;
