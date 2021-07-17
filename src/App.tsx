import React from 'react';
import Client from "./Client";
import "./assets/style-sheets/main.scss"
import {Provider} from "react-redux";
import {store} from "./store/reducers/RootReducer"

function App() {
  return (
      <Provider store={store}>
        <Client/>
      </Provider>
  );
}

export default App;
