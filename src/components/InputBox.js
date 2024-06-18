import { useId, useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addTodo } from "../utils/slice/todoSlice";


const InputBox = () =>{
    const [input, setInput] = useState("")
    const disptach = useDispatch()
    
    const handleInput = (e) =>{
        setInput(e.target.value)
    }


    const handleAddTodo = () =>{
        console.log("Add button is clicked");
        disptach(addTodo(input))
        setInput("")
    }

    return(
        <div className="p-10 flex justify-center gap-5">
            <input value={input} onChange={(e)=>{handleInput(e)}} className="border border-3 border-black pr-5 text-xl" type="text" placeholder="Enter Your todo" />
            <Button btnName="Add" handleFunc={handleAddTodo} />
        </div>
    );
};

export default InputBox;