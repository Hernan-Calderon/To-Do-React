import { ToDoItem } from "./components/ToDoItem";
import { ToDoCounter } from "./components/ToDoCounter";
import { ToDoSearch } from "./components/ToDoSearch";
import { ToDoList } from "./components/ToDoList";
import { ToDoCreate } from "./components/ToDoCreate";
import { ToDosLoading } from "./components/ToDosLoading";
import { TodosError } from "./components/TodosError";
import { ToDosEmpty } from "./components/ToDosEmpty";
import {
  getRequest,
  postRequest,
  pushRequest,
  deleteRequest,
} from "./services/AxiosToDoService";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import { ToDoForm } from "./components/ToDoForm";

function App() {
  const [texto, setTexto] = useState("");
  const [toDos, setToDos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const total = toDos.length;
  const completed = toDos.filter((toDo) => toDo.completed === true).length;
  const serchedToDos = toDos.filter(
    (toDo) => toDo.text.toLowerCase().includes(texto.toLowerCase()) === true
  );

  const completeToDo = async (id) => {
    try {
      const newToDos = [...toDos];
      const toDo = newToDos.find((toDO) => toDO.id === id);
      toDo.completed = true;
      await pushRequest(toDo);
      setToDos(newToDos);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const deleteToDo = async (id) => {
    try {
      const newToDos = toDos.filter((toDo) => toDo.id !== id);
      await deleteRequest(id);
      setToDos(newToDos);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  function crearToDo(textoToDo) {
    if (textoToDo !== "") {
      const postToDo = async () => {
        try {
          const body = { text: textoToDo, completed: false };
          const respuesta = await postRequest(body);
          setToDos([...toDos, respuesta.data]);
        } catch (error) {
          setErrorMessage(error.message);
        }
      };
      postToDo();
    }
  }

  const getToDos = async () => {
    try {
      const respuesta = await getRequest();
      setToDos(respuesta.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    getToDos();
  }, []);

  return (
    <>
      <ToDoCounter total={total} completed={completed} />
      <ToDoSearch texto={texto} setTexto={setTexto} />

      <ToDoList>
        {loading && (
          <>
            <ToDosLoading />
            <ToDosLoading />
            <ToDosLoading />
          </>
        )}
        {error && <TodosError errorMessage={errorMessage} />}
        {!error && !loading && serchedToDos.length === 0 && <ToDosEmpty />}
        {serchedToDos.map((toDo) => (
          <ToDoItem
            key={toDo.id}
            id={toDo.id}
            text={toDo.text}
            completed={toDo.completed}
            completeToDo={completeToDo}
            deleteToDo={deleteToDo}
          />
        ))}
      </ToDoList>

      <ToDoCreate setOpenModal={setOpenModal} openModal={openModal} />

      {openModal && (
        <Modal>
          <ToDoForm setOpenModal={setOpenModal} crearToDo={crearToDo} />
        </Modal>
      )}
    </>
  );
}

export default App;
