import { PersonalHomepage } from "./features/PersonalHomepage";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <PersonalHomepage />
    </Provider>
  );
};

export default App;
