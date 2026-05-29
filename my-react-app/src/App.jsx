import "./App.css";

import Greeting from "./Greeting";
import Dashboard from "./Dashboard";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <h1>React Exercises</h1>

      <Greeting name="James" />
      <Dashboard />
      <Counter />
    </div>
  );
}

export default App;
