import { ToDoItem } from "./components/ToDoItem";
import { ToDoCounter } from "./components/ToDoCounter";
import { ToDoSearch } from "./components/ToDoSearch";
import { ToDoList } from "./components/ToDoList";
import { ToDoCreate } from "./components/ToDoCreate";
import {
  getRequest,
  postRequest,
  pushRequest,
  deleteRequest,
} from "./services/AxiosToDoService";
import { useEffect, useState } from "react";

function App() {
  const [texto, setTexto] = useState("");
  const [toDos, setToDos] = useState([]);
  const [datos, setDatos] = useState(null);

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
      console.log(error.message);
    }
  };

  const deleteToDo = async (id) => {
    try {
      const newToDos = toDos.filter((toDo) => toDo.id !== id);
      await deleteRequest(id);
      setToDos(newToDos);
    } catch (error) {
      console.log(error.message);
    }
  };

  function crearToDo() {
    if (texto !== "") {
      const postToDo = async () => {
        try {
          const body = { text: texto, completed: false };
          const respuesta = await postRequest(body);
          setToDos([...toDos, respuesta.data]);
          setTexto("");
        } catch (error) {
          console.log(error.message);
        }
      };
      postToDo();
    }
  }

  const getToDos = async () => {
    try {
      const respuesta = await getRequest();
      setToDos(respuesta.data);
      setDatos(respuesta.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getToDos();
  }, []);

  return (
    <>
      <ToDoCounter total={total} completed={completed} />
      <ToDoSearch texto={texto} setTexto={setTexto} />
      <p>{datos ? "" : "Cargando..."}</p>
      <ToDoList>
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

      <ToDoCreate crearToDo={crearToDo} />
    </>
  );
}

export default App;
