import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos:[
        {
            id : '1',
            todo:"Good Morning",
            checked:false
        }
    ],
    addTodo: (todo) =>{},
    updateTodo : (id,todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}

})

export const useTodo = () => {
       return useContext(todoContext)
}

export const TodoProvider = todoContext.Provider     //'T' capital me rakhna nhi toh value and method fetch nhi kar payega