import { createContext, useContext } from "react";

const ToDoContext = createContext([]);

export const useToDoContext = () => useContext(ToDoContext);

function ToDOProvider({ children }) {
  return <ToDoContext.Provider value={{}}>{children}</ToDoContext.Provider>;
}

export { ToDoContext, ToDOProvider };
