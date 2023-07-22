import React from "react";
import "../styles/ToDoItem.css";

function ToDoItem({ id, text, completed, completeToDo, deleteToDo }) {
  return (
    <li className="ToDoItem">
      <span
        className={`Icon Icon-checked ${completed && "Icon-checked--active"}`}
        onClick={() => completeToDo(id)}
      >
        v
      </span>
      <p className={`Text ${completed && "Text-completed"}`}>{text}</p>
      <span className="Icon Icon-deleted" onClick={() => deleteToDo(id)}>
        x
      </span>
    </li>
  );
}

export { ToDoItem };
