import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
  const [textValue, setTextValue] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  return (
    <div className="App">
      <input type="text" onChange={(e) => setTextValue(e.target.value)} />
      <button onClick={() => {setTodos([...todos, textValue])}}>Save</button>
      {todos.map(todo => <p>{todo}</p>)}
    </div>
  );
}

export default App;
