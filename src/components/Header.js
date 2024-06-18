
const Header = () =>{
    return(
        <header className="p-6 flex justify-around items-center w-screen shadow-lg text-lg">
            <div>
                React-Todo
            </div>
            <nav>
                <ul className="flex gap-4 items-center">
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;