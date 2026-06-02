import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function NestedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h3>Deeply Nested Component</h3>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default NestedComponent;
