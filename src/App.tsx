import './App.css';
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import {useState} from "react";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

  //test

    const addTodoHandler = (text: string) => {
        const newTodo = new Todo(text);

        setTodos(prevState => {
            return prevState.concat(newTodo);
        })
    }

    const removeTodoHandler = (todoId: string) => {
        setTodos(prevState => {
            return prevState.filter(todo => todo.id !== todoId)
        })
    }


  return (
    <div>
        <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} removeTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
