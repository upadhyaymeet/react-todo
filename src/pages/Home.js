import { Header, InputBox, ItemList } from "../components";

const Home = () => {
  return (
    <>
      <Header />
      <InputBox />
      <div className="mx-auto w-1/2">
        <h1>Todo List</h1>
        <ItemList />
      </div>
    </>
  );
};

export default Home;
