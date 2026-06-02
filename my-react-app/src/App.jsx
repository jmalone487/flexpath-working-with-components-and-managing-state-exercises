import "./App.css";

import Greeting from "./Greeting";
import Dashboard from "./Dashboard";
import Counter from "./Counter";

import { ThemeProvider } from "./ThemeContext";
import LevelOne from "./LevelOne";

import ErrorBoundary from "./ErrorBoundary";
import BrokenComponent from "./BrokenComponent";

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>React Exercises</h1>

        <Greeting name="James" />
        <Dashboard />
        <Counter />

        <LevelOne />

        <ErrorBoundary>
          <BrokenComponent />
        </ErrorBoundary>
      </div>
    </ThemeProvider>
  );
}

export default App;
