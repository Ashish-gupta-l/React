import { createSlice ,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id: 1, text:"Hello Buddy"}]
}

export const todoSlice = createSlice({
    name:'todo',   //yeh slice ka naam hai jb redux extension use karenge toh yeh name show hoga 
    initialState,   //pass reference not call
    reducers: {     //isme hum bus declare nhi pura function likhna padta hai 
        addTodo : (state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload   //payload apne aap me ek object hai
            }
            state.todos.push(todo)
        },
        removeTodo : (state,action)=>{     //state me milta hai current state jo bhi ho | action ke andar jo bhi pass ho rha ho
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)  //id woh compare kar lega action.payload.id likhne ki jarurat nhi

        }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer