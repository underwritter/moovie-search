import "./App.css";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {Routes} from "./routes/routes";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
