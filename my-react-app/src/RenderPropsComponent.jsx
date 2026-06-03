function RenderPropsComponent({ render }) {
  const message = "Hello from Render Props!";
  return (
    <div>
      <h2>Render Props Component</h2>
      {render(message)}
    </div>
  );
}

export default RenderPropsComponent;
