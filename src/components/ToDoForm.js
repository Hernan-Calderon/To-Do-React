import React, { useState } from "react";
import "../styles/ToDoForm.css";

function ToDoForm({ setOpenModal, crearToDo }) {
  const [textoToDo, setTextoToDo] = useState("");

  const crearNuevoToDO = (evento) => {
    evento.preventDefault();
    crearToDo(textoToDo);
    setTextoToDo("");
    setOpenModal(false);
  };
  return (
    <form onSubmit={crearNuevoToDO}>
      <label>Escribe un nuevo To Do</label>
      <textarea
        placeholder="¿Que voy a hacer?"
        value={textoToDo}
        onChange={(event) => setTextoToDo(event.target.value)}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={() => setOpenModal(false)}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Crear To Do
        </button>
      </div>
    </form>
  );
}

export { ToDoForm };
