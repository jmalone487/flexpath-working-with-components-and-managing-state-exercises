import RenderPropsComponent from "./RenderPropsComponent";

function RenderPropsExample() {
  return (
    <RenderPropsComponent
      render={(msg) => (
        <p style={{ color: "purple", fontWeight: "bold" }}>
          {msg}
        </p>
      )}
    />
  );
}

export default RenderPropsExample;
