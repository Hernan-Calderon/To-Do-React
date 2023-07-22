import React from "react";
import "../styles/ToDoSearch.css";

function ToDoSearch({ texto, setTexto }) {
  return (
    <input
      placeholder="¿Que voy a hacer?"
      className="ToDoSearch"
      value={texto}
      onChange={(event) => setTexto(event.target.value)}
    />
  );
}

export { ToDoSearch };
