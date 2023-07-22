import React from "react";
import "../styles/ToDoCreate.css";

function ToDoCreate({ crearToDo }) {
  return (
    <button className="ToDoCreate" onClick={() => crearToDo()}>
      +
    </button>
  );
}

export { ToDoCreate };
