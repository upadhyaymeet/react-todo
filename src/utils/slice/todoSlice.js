import { createSlice,nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todo",
    initialState:{
        items:[]
    },
    reducers:{
        addTodo:(state, action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.items.push(todo)
        },
        deleteTodo:(state, action)=>{
                state.items = state.items.filter((todo)=> todo.id !== action.payload)
        }   
    }
})

export const {addTodo, deleteTodo} = todoSlice.actions

export default todoSlice.reducer