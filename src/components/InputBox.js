import Button from "./Button";


const InputBox = () =>{
    return(
        <div className="p-10 flex justify-center gap-5">
            <input className="border border-3 border-black pr-5 text-xl" type="text" placeholder="Enter Your todo" />
            <Button btnName="Add"/>
        </div>
    );
};

export default InputBox;