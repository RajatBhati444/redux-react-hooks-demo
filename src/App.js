import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  return (
    <div className="App">
      <h1> counter:{counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}

export default App;
