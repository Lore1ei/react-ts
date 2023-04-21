import React, {ReactNode, useState} from "react";
import Todo from "../models/todo";

type TodosContextObject = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextObject>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
})

const TodosContextProvider: React.FC<{children: ReactNode}> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    //test

    const addTodoHandler = (text: string) => {
        const newTodo: Todo = {
            id: new Date().toISOString(),
            text: text
        };

        setTodos(prevState => {
            return prevState.concat(newTodo);
        })
    }

    const removeTodoHandler = (todoId: string) => {
        setTodos(prevState => {
            return prevState.filter(todo => todo.id !== todoId)
        })
    }

    const contextValue: TodosContextObject = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
    }

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider;