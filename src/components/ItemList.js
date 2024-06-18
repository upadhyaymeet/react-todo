import Button from "./Button";

const ItemList = () =>{
    return(
        <div className="flex gap-2">
            <div>Welcome this is todo</div>
            <Button btnName="Edit" />
            <Button btnName="Delete" />
        </div>
    );
};

export default ItemList