import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Task from "./Task";
import { FaAnglesLeft } from "react-icons/fa6";
import { DataContext } from "./context/DataContext";

const ListPage = () => {
  const { tasks } = useContext(DataContext);
  // URL paramenterar = listans titel
  const { title } = useParams();

  // state för att ändra listans färg
  const [listColor, setListColor] = useState(() => {
    const storedLists = localStorage.getItem("lists");
    const parsedLists = storedLists ? JSON.parse(storedLists) : [];
    const list = parsedLists.find((list) => list.title === title);
    return list ? list.color : "#FFFFFF"; // default färg
  });

  // uppdaterar localStorage
  useEffect(() => {
    const storedLists = localStorage.getItem("lists");
    const parsedLists = storedLists ? JSON.parse(storedLists) : [];
    const updatedLists = parsedLists.map((list) =>
      list.title === title ? { ...list, color: listColor } : list
    );
    localStorage.setItem("lists", JSON.stringify(updatedLists));
  }, [listColor, title]);

  // hanterar färgbyte + lägger till ett opaque värde
  const handleListColorChange = (e) => {
    const rgbaColor = `rgba(${parseInt(
      e.target.value.slice(1, 3),
      16
    )}, ${parseInt(e.target.value.slice(3, 5), 16)}, ${parseInt(
      e.target.value.slice(5, 7),
      16
    )}, 0.658)`;
    setListColor(rgbaColor);
  };

  // filterar tasks efter vilka som finns i listan
  const filteredTasks = tasks.filter((task) => task.category === title);

  return (
    <main>
      <ul className="task-list-page" style={{ backgroundColor: listColor }}>
        <div className="page-header">
          {" "}
          <Link to="/" className="back-arrow">
            <FaAnglesLeft />
          </Link>
          <h2 className="page-title">Tasks in {title}</h2>
          <form>
            <label className="change-color" htmlFor="listColor">
              Change color
            </label>
            <p style={{ fontSize: "0.8rem" }}>Change color</p>
            <input
              type="color"
              id="listColor"
              value={listColor}
              onChange={handleListColorChange}
            />
          </form>
        </div>

        <div className="list-tasks">
          {filteredTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      </ul>
    </main>
  );
};

export default ListPage;
