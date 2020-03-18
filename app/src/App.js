import React from 'react';
import { createStore, applyMiddleware} from "redux";
import { Provider } from "react-redux";
import { activityReducer as reducer } from "./reducers/activityReducer";
import thunk from "redux-thunk";
import './App.css';
import Activity from "./components/Activity";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <header className="App-header">
        <h1>Random Activity Generator</h1>
      </header>
      <Activity/>
    </div>
    </Provider>
  );
}

export default App;
