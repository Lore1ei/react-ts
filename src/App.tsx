import './App.css';
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import {useContext, useState} from "react";
import TodosContextProvider, {TodosContext} from "./store/todos-context";

function App() {

  return (
    <TodosContextProvider>
        <NewTodo/>
      <Todos/>
    </TodosContextProvider>
  );
}

export default App;
