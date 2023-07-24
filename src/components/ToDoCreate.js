import React from "react";
import "../styles/ToDoCreate.css";

function ToDoCreate({ setOpenModal, openModal }) {
  return (
    <button className="ToDoCreate" onClick={() => setOpenModal(!openModal)}>
      +
    </button>
  );
}

export { ToDoCreate };
