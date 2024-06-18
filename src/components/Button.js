
const Button = (props) =>{
    const {btnName} = props
    return(
        <button className="bg-green-300 px-5 rounded-lg text-lg font-bold">
            {btnName}
        </button>
    );
};

export default Button;