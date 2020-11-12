import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./containers/Home";

function App() {
  return (
    <Provider store={store}>
      <main>
        <Home />
      </main>
    </Provider>
  );
}

export default App;
