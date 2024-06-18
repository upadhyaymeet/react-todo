import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { deleteTodo } from "../utils/slice/todoSlice";

const ItemList = () => {
  const todo = useSelector((store) => store.todo.items);
  console.log(todo);
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 flex-col">
      {todo.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.text}</h1>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          <button>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
