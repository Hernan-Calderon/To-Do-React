import React from "react";

import "../styles/ToDoCounter.css";

function ToDoCounter({ total, completed }) {
  return (
    <h1 className="ToDoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span>
    </h1>
  );
}

export { ToDoCounter };
