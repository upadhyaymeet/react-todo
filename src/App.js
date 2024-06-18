import { Provider } from "react-redux";
import { Home } from "./pages";
import appStore from "./utils/store/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <Home />
    </Provider>
  );
};

export default App;
