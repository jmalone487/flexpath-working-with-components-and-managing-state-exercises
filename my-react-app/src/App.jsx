import "./App.css";

import Greeting from "./Greeting";
import Dashboard from "./Dashboard";
import Counter from "./Counter";

import { ThemeProvider } from "./ThemeContext";
import LevelOne from "./LevelOne";

import ErrorBoundary from "./ErrorBoundary";
import BrokenComponent from "./BrokenComponent";

import WindowWidthDisplay from "./WindowWidthDisplay";

import DataDisplayWithLoading from "./DataDisplayWithLoading";

import RenderPropsExample from "./RenderPropsExample";

import ModalExample from "./ModalExample";

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>React Exercises</h1>

        {/* Exercise 1 */}
        <Greeting name="James" />

        {/* Exercises 2–3 */}
        <Dashboard />

        {/* Exercise 4 */}
        <Counter />

        {/* Exercise 6 */}
        <LevelOne />

        {/* Exercise 8 */}
        <WindowWidthDisplay />

        {/* Exercise 9 */}
        <DataDisplayWithLoading
          isLoading={false}
          data="Here is your loaded data!"
        />

        {/* Exercise 10 */}
        <RenderPropsExample />

        {/* Exercise 11 */}
        <ModalExample />

        {/* Exercise 7 */}
        <ErrorBoundary>
          <BrokenComponent />
        </ErrorBoundary>
      </div>
    </ThemeProvider>
  );
}

export default App;

