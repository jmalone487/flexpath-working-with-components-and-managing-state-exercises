import useWindowWidth from "./useWindowWidth";

function WindowWidthDisplay() {
  const width = useWindowWidth();

  return (
    <div>
      <h2>Window Width</h2>
      <p>Current width: {width}px</p>
    </div>
  );
}

export default WindowWidthDisplay;
