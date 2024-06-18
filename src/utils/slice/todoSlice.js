import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todo",
    initialState:{
        items:[]
    },
    reducers:{
        addTodo:(state, action)=>{
            state.items.push(action.payload)
        },
        deleteTodo:(state, action)=>{
            state.items.filter(item=> item !== action.payload)
        }
    }
})

export const {addTodo, deleteTodo} = todoSlice.actions

export default todoSlice.reducer